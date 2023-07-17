





const mongoose=require('mongoose');

main().catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  const fruitSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
});
const Fruit=mongoose.model("Fruit",fruitSchema);
const fruit=new Fruit({
    name:"apple",
    rating:7,
    review:"PRETTY SOLID AS A FRUIT."
});
fruit.save();
const personschema=new mongoose.Schema({
    name:String,
    age:Number,
});
const pinnapple=new Fruit({
    name:"pinnapple",
    rating:9,
    review:"PRETTY nice AS A FRUIT."
});
pinnapple.save();
const Person=mongoose.model("person",personschema);
const pperson=new Person({
    name:"adam",
    age:40,
});
//pperson.save();


const kiwi=new Fruit(    {
rating:9,
review:"PRETTY sweet AS A FRUIT."

});
const orange=new Fruit(    {name:"orange",
rating:9,
review:"PRETTY good AS A FRUIT."

});
const banana=new Fruit(    {name:"banana",
rating:3,
review:"do not like that much AS A FRUIT."

});
Fruit.insertMany([kiwi,orange,banana]);
const fruits =await Fruit.find();
fruits.forEach((element =>{
    console.log(element.name);
}));
//const res=await Fruit.updateOne({_id:"64b53406c314fa1fdff07a55"},{name:"kiiwi"});
//console.log(res);
const res=await Fruit.deleteOne({name:
    'kiiwi'});

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}








 
 




