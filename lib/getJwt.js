var jwt = require('jsonwebtoken')

async function getJwt(user) {
  try {
    let token = jwt.sign({
      _id: user._id,
      name: user.name,
      email: user.email,
      status: user.status
    }, process.env.SECRET, { expiresIn: '1h' });
    return { token, expiresIn: 60 * 60 * 1000 }

  } catch (e) {
    console.log("inside main catch err of getJwt lib : ", e);
    reject(e);
  }
}

module.exports = getJwt;