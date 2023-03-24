const express = require('express');
const router = express.Router();

router.post('/foodData',(req,res)=>{
    try{
    console.log(global.food_item)
    res.send([global.food_item,global.foodCategory])
    }
    catch(err){
console.log(err);
res.send('SERVER ERROR')
    }
})
module.exports = router;