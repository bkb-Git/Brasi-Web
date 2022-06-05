const env = process.env.APP_ENV;

const ENVIRONMENT = {
  LOCAL: "local",
  DEV: "dev",
  PROD: "prod",
};

const config = {
  ENV: env,
  DOMAIN: "loglinklogistics.com",

  EMAIL_RECIPIENT: "",

  // MailGun Configurations
  MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
  MAILGUN_API_USER: "api",
  MAILGUN_DOMAIN: "sandboxf142034e865448719bb8e7681ce34008.mailgun.org",

  MAILGUN_TEMPLATE_INQUIRY: "inquiry-v1",
};

if (env === ENVIRONMENT.LOCAL) {
  config.EMAIL_RECIPIENT = "bettblake08@hotmail.com";
}

if (env === ENVIRONMENT.DEV) {
  config.EMAIL_RECIPIENT = "bettblake08@hotmail.com";
}

if (env === ENVIRONMENT.PROD) {
  config.EMAIL_RECIPIENT = "team@loglinklogistics.com";
  config.MAILGUN_DOMAIN = "mail.loglinklogistics.com";
}

export default config;
