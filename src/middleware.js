const jwt = require("jwt-simple");
const checkToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token) {
    const payload = jwt.decode(token, process.env.TOKEN_KEY);
    if (payload.expiredAt < moment().unix()) {
      return res.status(401).send("Token expired");
    }
    req.user = payload;
    return next();
  }
  return res.status(401).send("Token not found");
}
module.exports = { checkToken };
