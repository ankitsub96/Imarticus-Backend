var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');

var mongoose = require('mongoose');


const options = {
  //  useNewUrlParser: true,
  //useCreateIndex: true,
  //useFindAndModify: false,
  //autoIndex: false, // Don't build indexes
  reconnectTries: 2, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 12000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};
//172.16.122.203
// mongoose.connect(process.env.MONGO_DB_URL||'mongodb://localhost/users', options).then((db) => {
//   console.log("conneted to db from app.ts");
// }).catch(err=>{
//   console.log("error =========>>>",err.message,err.stack);
// });

const dbConnect = require('./lib/mongoDbConnect');

const dbUrl = process.env.MONGO_DB_URL||'mongodb://localhost/users-yellow';
// console.log(dbUrl);
dbConnect.connect(dbUrl);

var app = express();
app.use(cors())
app["basePathM"] = __dirname;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{

  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
  next();
})

app.use('/', indexRouter);
app.use('/users', require('./routes/users'));
app.use('/modules', require('./routes/modules'));
app.use('/courses', require('./routes/courses')); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
