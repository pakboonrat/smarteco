let express = require('express'),
    path = require('path'),
    mongoose =  require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoDB = require('./database/touch')
//
// C:\smarteco\node-backend\database
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB.touch, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database successfully connect');
}, error => {
    console.log('Database error: ' + error)
})

const nikomRoute = require('./routes/nikom.routes')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist/')))
//Base route
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

// API Root
app.use('/api', nikomRoute);

// PORT
const port = process.env.PORT || 8000;

app.listen(port, ()=>{
  console.log('Listening on port '+ port)
})

// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
})

// error handler
app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message)
})


