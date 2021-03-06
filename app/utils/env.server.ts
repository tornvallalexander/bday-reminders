function getEnv() {
  return {
    NODE_ENV: process.env.NODE_ENV,
    API_URL: process.env.API_URL,
  }
}

type ENV = ReturnType<typeof getEnv>

// App puts these on
declare global {
  // eslint-disable-next-line
  var ENV: ENV
  interface Window {
    ENV: ENV
  }
}

export {getEnv}
