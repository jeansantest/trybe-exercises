const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const userRouter = require('./routers/userRouter');
const { isValidToken } = require('./middlewares/validations2');

const PORT = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRouter);

app.get('/btc', isValidToken, async (_req, res) => {
  const result = await axios.get(
    'https://api.coindesk.com/v1/bpi/currentprice/BTC.json'
  );

  res.status(200).json(result.data);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
