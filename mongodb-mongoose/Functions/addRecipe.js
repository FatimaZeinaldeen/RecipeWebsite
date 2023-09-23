import "../connectDB.js";
import Recipe from "../Models/Recipe.js";

const recipe1=new Recipe({
    recipe_id:"123",
    name: "Pesto Pasta",
    category:"Lunch",
    user:1234,
    prep_time:{
        time:45,
        unit:"min"
    },
    country:"Italy",
    serving:5,
    chef_note:"add salt for extra flavor !!",
    instructions:["Boil the pasta","make pesto","add pesto to the pasta","add parmesan topping"],
    ingredients:[
        {
            name:"Pesto",
            measurement:1,
            unit:"cup/s",
        },
        {
            name:"Pasta",
            measurement:750,
            unit:"gr",
        },
        {
            name:"water",
            measurement:2,
            unit:"L",
        },
        {
            name:"parmesan",
            measurement:0.5,
            unit:"cup/s",
        }
    ]

});

await recipe1.save();