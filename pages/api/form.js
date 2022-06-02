const handler = (req, res) => {
  const body = req.body;

  console.log("hello");

  //   // Guard clause checks for first and last name,
  //   // and returns early if they are not found
  //   if (!body.first || !body.last) {
  //     // Sends a HTTP bad request error code
  //     return res.status(400).json({ data: 'First or last name not found' })
  //   }

  // Found the name.
  // Sends a HTTP success code
  return res.status(200).json({ data: body });
};

export default handler;
