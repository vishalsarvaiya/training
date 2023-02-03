const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
    console.log(req.body);
     //const ans = Math.pow(Number(req.body.value), Number(req.body.power));
    const ans = getPower(Number(req.body.value), Number(req.body.power));
    console.log(ans)
    res.json({ ans });
  });

  app.listen(4000, () => {
    console.log(`Server is running on port 4000.`);
  });
  

  
function getPower(value,power) {
    const ans = Math.pow(value,power);
    return ans;
}
