// DO NOT MODIFY ANYTHING HERE, THE PLACE WHERE YOU NEED TO WRITE CODE IS MARKED CLEARLY BELOW

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(function (req, res, next) {
  const allowedOrigins = ["http://localhost:3000"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.enable("trust proxy");

app.get("/message", async (req, res) => {
  res.json({ message: "Hello from server!" });
  
});




app.post("/api/fetchStockData", async (req, res) => {
  // YOUR CODE GOES HERE, PLEASE DO NOT EDIT ANYTHING OUTSIDE THIS FUNCTION
  const receivedData = req.body.message; 

   //   console.log(receivedData)
  //   const responseData = 'Data received on the server!';
  let data=""
  console.log(receivedData)
  const symbol = receivedData.symbol;
  const date = receivedData.date;
  try {
      const apiUrl = `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/${date}/${date}?adjusted=true&sort=asc&limit=120&apiKey=pp1sG3mmuV_iShyKPySRBNFiHGZH4vio`;
      const response = await axios.get(apiUrl);
      
      // Extract the data from the response
      data = response.data;
      data=data['results']
      console.log(data)
      console.log(apiUrl)
      // Send the data as a JSON response to the client
      res.json(data[0]);
    } catch (error) {
        console.error("Error fetching data:", error.message);
        res.status(500).json({ error: "Failed to fetch data." });
    }
    
    //res.json(data);

});

const port = process.env.PORT || 8000;
app.listen(8000, () => console.log(`Listening on port ${port}`));
