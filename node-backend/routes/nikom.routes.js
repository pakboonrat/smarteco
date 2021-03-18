const express  = require('express');
const app = express();

const nikomRoute = express.Router();
let Nikom = require('../model/Nikom');

//Add Nikom
nikomRoute.route('/add-nikom').post((req, res, next) => {
    Nikom.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        }else {
            res.json(data)
        }
    })
})

// Get all nikom
nikomRoute.route('/').get((req, res) => {
    Nikom.find((error, data) => {
        if (error){
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Get nikom
nikomRoute.route('/read-nikom/:id').get((req, res) => {
    Nikom.findByID(req.param.id, (error, data) => {
        if (error){
            return next(error);
        } else {
            res.json(data);
        }
    })
})


// Update  nikom
nikomRoute.route('/update-nikom/:id').put((req,res,next)=>{
    Nikom.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },(error,data)=>{
        if(error){
            return next(error);
            console.log(error);
        }else{
            res.json(data);
            console.log('Nikom Updated Successfully');
        }
    })
})

// Delete  nikom
nikomRoute.route('/delete-nikom/:id').delete((req,res,next)=>{
    Nikom.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error){
            return next(error);
        }else{
            res.status(200).json({
                msg: data
            });
        }
    })
})

module.exports = nikomRoute;
