import mongoose from "mongoose";
import "../connectDB.js";
import Recipe from "../Models/Recipe.js";



 //Recipe.updateOne(filter,update).then((result)=>{
       //console.log('Update Result:',result);
 //}).catch((error)=>{
   //console.log('Update Error:',error);
 //}).finally(()=>
     //mongoose.connection.close()
 //)
const filter ={'recipe_id': '123'};
const update ={//new values
  $set: {
     name: 'Pesto Pasta',
     serving: '5'
    },
};

 const Update = async (model,filter,update) => {
    try {
      const updated = await model.updateOne(filter,update);
      return updated;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    } finally {
    mongoose.connection.close()
    }
  };


  //const filter ={'recipe_id': '123'};
  //const update ={//new values
   // $set: {
     //  name: 'Pasta1',
      // serving: '6'
      //},
  //};
  //const updated = await Update(Recipe,filter,update);

    
    