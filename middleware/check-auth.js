var jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    const decodedToken = jwt.verify(req.headers.token, process.env.SECRET);
    if (decodedToken) {
      if (decodedToken._id) { 
        req.userData = {
          userId: decodedToken._id, 
          email: decodedToken.email,
          name: decodedToken.name, 
        };
        console.log('middleware forwarding the data::',req.userData)
        next();
      } else {
        res.status(401).json({
          status: {
            message: "Unauthorised. Kindly check the Token sent.",
            code: 401,
          }
        }); 
      }
    } 
  }
  catch (e) {
    console.log(process.env.JWT_KEY, e);
    res.status(401).json({
      status: {
        message: "Auth Failed!",
        code: 401,
        error: e
      }
    })
  }
}
