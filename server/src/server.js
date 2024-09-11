const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT ?? 3000;
try {
  app.listen(PORT, () => {
    console.log('server start on port ', PORT);
  });
} catch (error) {
  console.log(error);
}
