const Course = require("../../models/Course");
const http = require("http");
const { response } = require("express");
const Module = require("../../models/Module");
const Video = require("../../models/Video");
var mongoose = require("mongoose");
let ObjectId = mongoose.Types.ObjectId;

module.exports = { 
	fetchModule: async (req, res, next) => {
		try {
			// support for authentication in paid Modules
			console.log(req.userData)
			// let userId = req.userData.userId 
			// let requiredInputs = ['delta', 'limit']
			let requiredInputs = []
			requiredInputs.forEach(input => {
				if (!req.query[input]) {
					return res.status(401).json({
						status: {
							message: `${input} not provided`,
							code: 401,
						},
					});
				}
			})

			if (!req.params.moduleId) {
				return res.status(401).json({
					status: {
						message: `Specify a moduleId`,
						code: 401,
					},
				});
			}

			let moduleFound

			let moduleId = req.params.moduleId
			let foundModule = await Module.findOne({ _id: ObjectId(moduleId) })
			console.log({foundModule})
			if (!(foundModule && foundModule._id)) {
				return res.status(401).json({
					status: {
						message: `Invalid moduleId. Please specify correct moduleId`,
						code: 401,
					},
				});
			}
			if (!(foundModule && foundModule.status=='active')) {
				return res.status(401).json({
					status: {
						message: `Deleted module. Please specify a different moduleId`,
						code: 401,
					},
				});
			}
			let videoArray=[]
			await Promise.all(foundModule.videos.map( async (videoId)=>{ 
				try {
				  console.log({videoId}) 
				  foundVideosObject = await Video.findOne({ _id: ObjectId(videoId) }) 
				  console.log({foundVideosObject}) 
				  videoArray.push({
					name: foundVideosObject.name,  
					description: foundVideosObject.description, 
					url: foundVideosObject.url, 
				  }) 
				  console.log({videoArray})
				}
				catch(e){
				  console.log("error::", e); 
				}
			  }) 
			  )

			let moduleToSend = {
				moduleId: foundModule._id,
				name: foundModule.name,
				videos: videoArray, 
			}

			return res.status(201).json({
				status: {
					message: "Module requested",
					code: 201
				},
				data: moduleToSend
			})
		}
		catch (e) {
			console.log('Module find error:::', e)
			return res.status(404).json({
				status: {
					message: e.message,
					code: 404,
				},
			});
		}
	},
}