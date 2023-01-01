const getDomain = () => {
  return process.env.NODE_ENV == "development" ? "localhost:3000" : "linkku.cc"
}

export default getDomain;