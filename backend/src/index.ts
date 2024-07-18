import app from './app.js';
import { connectDB } from './db/connection.js';

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server open!!!');
    });
  })
  .catch((error) => {
    console.log('Error to connect to the database', error);
  });
