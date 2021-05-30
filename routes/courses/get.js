const Course = require("../../models/Course");
const http = require("http");
const { response } = require("express");
var mongoose = require("mongoose");
let ObjectId = mongoose.Types.ObjectId;

module.exports = {

	fetchAllCourses: async (req, res, next) => {
		try {
			// console.log(req.userData)
			let userId = req.userData.userId
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
			let limit, delta
			req.query.limit ? limit = parseInt(req.query.limit) : ''
			req.query.delta ? delta = parseInt(req.query.delta) : ''

			let courseFoundArr

			//support for pagination
			if (limit && delta) {
				courseFoundArr = await Course.find({ type: 'free', status: 'active' }).sort({ "createdAt": 'desc' }).skip(delta * limit).limit(limit)
			} else {
				courseFoundArr = await Course.find({ status: 'active' }).sort({ "createdAt": 'desc' })
			}

			let coursesToSend = courseFoundArr.map(course => {
				let entry = {
					courseId: course._id,
					name: course.name,
					modules: course.modules,
				}
				return entry
			})

			return res.status(201).json({
				status: {
					message: "Messages requested",
					code: 201
				},
				data: coursesToSend
			})
		}
		catch (e) {
			console.log('Messages find error:::', e)
			return res.status(404).json({
				status: {
					message: e.message,
					code: 404,
				},
			});
		}
	},
	fetchCourse: async (req, res, next) => {
		try {

			// support for authentication in paid Courses
			// console.log(req.userData)
			let userId = req.userData.userId
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

			if (!req.params.courseId) {
				return res.status(401).json({
					status: {
						message: `Specify a courseId`,
						code: 401,
					},
				});
			}

			let courseFound

			let courseId = req.params.courseId
			let foundCourse = await Course.findOne({ _id: ObjectId(courseId) })
			if (!(foundCourse && foundCourse._id)) {
				return res.status(401).json({
					status: {
						message: `Invalid courseId. Please specify correct courseId`,
						code: 401,
					},
				});
			}
			if (!(foundCourse && foundCourse.status=='in-active')) {
				return res.status(401).json({
					status: {
						message: `Deleted Course. Please specify a different courseId`,
						code: 401,
					},
				});
			}
			let courseToSend = {
				courseId: foundCourse._id,
				name: foundCourse.name,
				modules: foundCourse.modules,
			}

			return res.status(201).json({
				status: {
					message: "Course requested",
					code: 201
				},
				data: courseToSend
			})
		}
		catch (e) {
			console.log('Course find error:::', e)
			return res.status(404).json({
				status: {
					message: e.message,
					code: 404,
				},
			});
		}
	},
}