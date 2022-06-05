import Mailgun from "mailgun.js";
import FormData from "form-data";

import config from "src/config";

const EmailService = () => {
  const service = {
    client: null,
  };

  if (service.client == null) {
    const mailgun = new Mailgun(FormData);
    service.client = mailgun.client({ username: config.MAILGUN_API_USER, key: config.MAILGUN_API_KEY });
  }

  /**
   * @return IMailgunClient
   */
  service.getClient = () => service.client;

  /**
   * @param payload { name, email, subject, content }
   * @return Promise
   */
  service.send = (payload) => {
    const messageData = {
      from: `${payload.name} <${payload.email}>`,
      to: `${config.EMAIL_RECIPIENT}`,
      subject: `Chat with ${payload.name} - ${payload.subject}`,
      template: config.MAILGUN_TEMPLATE_INQUIRY,
      "h:X-Mailgun-Variables": JSON.stringify({
        // be sure to stringify your payload
        content: payload.content,
        name: payload.name,
      }),
      "h:Reply-To": payload.email,
    };

    return service.getClient().messages.create(config.MAILGUN_DOMAIN, messageData);
  };

  return service;
};

export default EmailService;
