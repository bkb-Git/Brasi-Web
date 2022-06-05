import EmailService from "src/backend/services/EmailService";
import { REGEX_EMAIL, REGEX_NAME } from "src/helpers/regex";

const handler = (req, res) => {
  const { body } = req;

  if (!body.name || !REGEX_NAME.test(body.name)) {
    return res.status(400).json({
      data: {
        success: false,
      },
      errors: ["Invalid name. Please provide a valid name with a length between 3 and 60."],
    });
  }

  if (!REGEX_EMAIL.test(body.email)) {
    return res.status(400).json({
      data: {
        success: false,
      },
      errors: ["Invalid email. Please provide a valid email."],
    });
  }

  if (!body.subject || body.subject?.length === 0) {
    return res.status(400).json({
      data: {
        success: false,
      },
      errors: ["Please provide a subject."],
    });
  }

  if (!body.content || body.content?.length === 0) {
    return res.status(400).json({
      data: {
        success: false,
      },
      errors: ["Please provide the content of the email."],
    });
  }

  return EmailService()
    .send({
      name: body.name,
      email: body.email,
      subject: body.subject,
      content: body.content,
    })
    .then(() => res.status(200).json({ data: { success: true } }))
    .catch(() => res.status(500).json({ data: { success: false }, errors: ["Failed to dispatch email."] }));
};

export default handler;
