const User = require("../../models/User");
const getJwt = require("../../lib/getJwt");  
const bcrypt = require("bcryptjs"); 
var mongoose = require("mongoose");
let ObjectId = mongoose.Types.ObjectId;

// const jwt = require("jsonwebtoken");

module.exports = {

  signup: async (req, res, next) => {
    try {
      // necessary input validation
      let requiredInputs = ['email', 'name', 'password']
      requiredInputs.forEach(input => {
        if (!req.body[input]) {
          return res.status(401).json({
            status: {
              message: `${input} not provided`,
              code: 401,
            },
          });
        }
      }) 
      // 
      let existingUser = await User.find({ email: req.body.email, status: 'active' })
      if (existingUser.length > 0) {
        return res.status(401).json({
          status: {
            message: 'Username is registered already. Pick a new one!',
            code: 401,
          },
        });
      }

      const hash = await bcrypt.hash(req.body.password, 10);

      let userCreatedObj = await User.create({ email: req.body.email, name: req.body.name, status: 'active', password: hash })

      console.log('user created::', userCreatedObj)


      if (userCreatedObj && userCreatedObj._id) {
        let tokenData = await getJwt(userCreatedObj)
        return res.status(200).json({
          status: {
            message: "signup successful",
            code: 200
          },
          data: {
            userId: userCreatedObj._id,
            name: userCreatedObj.name,
            email: userCreatedObj.email,
            status: userCreatedObj.status,
            token: tokenData.token,
            expiresIn: tokenData.expiresIn,
          }
        })
      }
      else {
        return res.status(401).json({
          status: {
            message: 'user not created',
            code: 401,
          },
        });
      }
    }
    catch (e) {
      console.log('signup error:::', e)
      return res.status(500).json({
        status: {
          message: e.message,
          code: e.code,
        },
      });
    }
  },
  login: async (req, res, next) => {
    try {
      if (!req.params.email) {
        return res.status(401).json({
          status: {
            message: 'email not provided',
            code: 401,
          },
        });
      }
      if (!req.body.password) {
        return res.status(401).json({
          status: {
            message: 'password not provided',
            code: 401,
          },
        });
      }
      console.log('login triggered:::', req.params.email)

      let foundUserObj = await User.findOne({ email: req.params.email, status: 'active' })

      if (!foundUserObj) {
        return res.status(401).json({
          status: {
            message: 'No user with this email found',
            code: 401,
          },
        });
      }
      console.log({foundUserObj})
      let compare = await bcrypt.compare(req.body.password, foundUserObj.password);
      console.log({compare})
      if(compare){
        let tokenData = await getJwt(foundUserObj) 
        return res.status(200).json({
          status: {
            message: "Login successful",
            code: 200
          },
          data: {
            userId: foundUserObj._id,
            name: foundUserObj.name,
            email: foundUserObj.email,
            status: foundUserObj.status,
            token: tokenData.token,
            expiresIn: tokenData.expiresIn,
          }
        }) 

      }else{
        return res.status(401).json({
          status: {
            message: 'Wrong Password. Please Try again.',
            code: 401,
          },
        })

      }  

    } catch (e) {
      console.log("error", e);
      return res.status(500).json({
        status: {
          error: e,
          message: e.message,
          code: 500,
        }
      });
    }

  },
  updateDetails: async (req, res, next) => {
    try {
      console.log('User userId:::', req.params.userId)
      console.log('User updateDetails:::', req.body)
      
      if (req.params.userId.length != 24) {
        return res.status(400).json({
          status: {
            message: 'Invalid userId provided',
            code: 400,
          },
        });
      }
      if (req.params.userId != req.userData.userId) {
        return res.status(400).json({
          status: {
            message: 'Unauthorised! You do not have permission to complete this operation.',
            code: 400,
          },
        });
      }
      if (!req.body ) {
        return res.status(400).json({
          status: {
            message: 'Please provide parameters in non-empty format',
            code: 400,
          },
        })
      } 
      let detailsToUpdate = {} 
 
      req.body.name? detailsToUpdate['name'] = req.body.name : ''

      if(req.body.email){
        let foundUserObj = await User.findOne({email: req.body.email, status: 'active'})

        console.log(foundUserObj._id,'  ',req.params.userId)
        if(foundUserObj){
          if(foundUserObj._id!=req.params.userId){
            return res.status(400).json({
              status: {
                message:'This Username is already Taken. Kindly Select a new one.',
                code: 400,
              },
            })

          }  
        }else{
          detailsToUpdate['email'] = req.body.email
        }
      }

      let hash
      if(req.body.password){
        hash = await bcrypt.hash(req.body.password, 10);
        detailsToUpdate['password'] = hash
      }

      let updatedUserObj = await User.findOneAndUpdate({ _id: (req.params.userId).toString(), status: 'active'}, {$set: detailsToUpdate}, { useFindAndModify: false, new: true })
 
      if (updatedUserObj) { 
        let tokenData = await getJwt(updatedUserObj)


        return res.status(201).json({
          status: {
            message: "Update successfully",
            code: 201
          },
          data: {
            userId: updatedUserObj._id,
            name: updatedUserObj.name, 
            username: updatedUserObj.email, 
            status: updatedUserObj.status, 
            token: tokenData.token,
            expiresIn: tokenData.expiresIn,
          }
        })
      }
    } catch (e) {
      console.log("error", e);
      return res.status(500).json({
        status: {
          error: e,
          message: e.message,
          code: 500,
        }
      });
    }
  }
};


