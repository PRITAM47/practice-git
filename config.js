function createConfig() {
  return {
    url: "http://localhost:8080",
  };
}

function getEnv() {
  return process.env.NODE_ENV || "development";
}
