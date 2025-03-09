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

function checkEnv() {
  if (getEnv() === "development") {
    console.log("Development environment");
  } else {
    console.log("Production environment");
  }
}
