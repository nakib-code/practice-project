import app from "./app.js";

const port = process.env.PORT || 5000;


const main = () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

main ()