const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  //Get Token from Header
  const token = req.header("x-auth-token");

  //Check If not token
  //401 = Unauthorized demektir
  if (!token) {
    return res.status(401).json({ msg: "No token authorization denied" });
  }

  //Verify yani Dogrulama Yapmak
  //jwt.verify 2 argument alir icine. 1. si TOKEN 2. si secretKey
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    //Dogruladiktan sonra req ile aldigimiz useri dogrulanmis kullanici olarak atiyoruz decoded.user diyerek
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
