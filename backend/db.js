const mongoose = require('mongoose');
const mongoURI = 'mongodb://Priyanshu:pspspsps@ac-l4axqhx-shard-00-00.mgdyacj.mongodb.net:27017,ac-l4axqhx-shard-00-01.mgdyacj.mongodb.net:27017,ac-l4axqhx-shard-00-02.mgdyacj.mongodb.net:27017/foodhubmern?ssl=true&replicaSet=atlas-6o01tq-shard-0&authSource=admin&retryWrites=true&w=majority';
const monogoDB = ()=>{
mongoose.connect(mongoURI,{ useNewUrlParser: true}, async(err, result)=>{
    if(err)console.log(err);
    else
    {
        console.log("connected");
        const fetched_data = mongoose.connection.db.collection("food_item");
        fetched_data.find({}).toArray(async (err, data)=>{
         
            const foodCategory = await mongoose.connection.db.collection("food_category")
                    foodCategory.find({}).toArray(function (err,catData){
           
                         if(err)console.log(err);
            else
            {
                global.food_item= data;
                global.foodCategory = catData
                
            }
                    })
            // if(err)console.log(err);
            // else
            // {
            //     global.food_item= data;
            //     // console.log(global.food_item);
            // }

        })
    }
})
}


module.exports = monogoDB;