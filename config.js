function createConfig() {
  return {
    url: "http://localhost:8080",
  };
}

function getEnv() {
  return process.env.NODE_ENV || "development";
}

function getProcessEnv() {
  return process.env;
}

function getConfig() {
  const config = createConfig();
  if (getEnv() === "production") {
    config.url = "http://production.com";
  }
  return config;
}
