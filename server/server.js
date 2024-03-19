const express = require("express");
const dotenv = require("dotenv");
const db = require("./db");
dotenv.config();
const app = express();

app.use(express.json());

//get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants");
    console.log('kkkkkkkkkkk',results);
    res.status(200).json({
      status: "success",
      results:results.rows.length,
      data:{ restaurants:results.rows,}
    });
  } catch (error) {
    console.log(error);
  }
});

//get a rstaurant
app.get("/api/v1/restaurants/:id",async(req,res)=>{
  try {
    const results=await db.query(
      "select * from restaurants where id=$1",[req.params.id]);
      console.log(results);
      res.status(200).json({
        status:"success",
        data:{  
          restaurants:results.rows,
        }
      })
  } catch (error) {
    
  }
});

//create a restaurant

app.post("/api/v1/restaurants",async(req,res)=>{
  try {
    const results=await db.query("INSERT into restaurants(name,location,price_range)values($1,$2,$3)returning *" ,//returning * will print the restauramt name location and proice
    [req.body.name, req.body.location,req.body.price_range])
    console.log(results);
    res.status(200).json({
      status:"success",
      data:{  
        restaurants:results.rows[0],//return only one object at a time that is will give only created restaurant details nothing else
      }
    })
  } catch (error) {
    console.log(error);
  }
})

//update restaurants

app.put("/api/v1/restaurants/:id",async(req,res)=>{
  try {
    const results= await db.query("UPDATE restaurants SET name=$1,location=$2,price_range:$3 where id=$4",
    [req.body.name, req.body.location,req.body.price_range,req.params.id] )
    console.log(results);
    res.status(200).json({
      status:"success",
      data:{  
        restaurants:results.rows[0],//return only one object at a time that is will give only created restaurant details nothing else
      }
    })
  } catch (error) {
    
  }
})
const port = process.env.port || 3001;
app.listen(port, () => {
  console.log("server running on port", port);
});
