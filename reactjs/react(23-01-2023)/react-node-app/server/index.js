const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
  console.log(req.body);
  const ans = getPrimes(req.body.n1);
  res.json({ ans });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

function getPrimes(number) {
  const ans = [];
  for (let i = 2; i <= number; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1; break;
      }
    }
    if (flag == 0) {
      ans.push(i);
    }
  }
  return ans;
  console.log(ans);
}
