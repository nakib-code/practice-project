import "dotenv/config";
import app from "./app.js";
import pool from "./config/db.js";
import RedisClient  from "./config/redis.js";


const port = process.env.PORT || 5001;



const main = async () => {
  try {
    const client = await pool.connect()
    console.log("Database connected successfully");
    client.release()

    await RedisClient.connect();
    console.log("Redis connected successfully");
    
    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  } catch (error) {
    console.log(error);
    
  }
};

main ()