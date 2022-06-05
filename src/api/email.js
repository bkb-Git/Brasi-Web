const endpoints = {
  EMAIL: ["POST", "/api/inquiry"],
};

const send = async (payload) => {
  const [method, url] = endpoints.EMAIL;

  const response = await fetch(url, {
    method,
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  });

  const responseData = await response.json();

  return {
    statusCode: response.status,
    data: responseData.data,
    error: responseData.errors ? responseData.errors[0] : "",
  };
};

const emailApi = {
  send,
};

export default emailApi;
