const express = require('express');
require("dotenv").config();
const productRoutes = require('./routes/productRoutes');
const swaggerMiddleware = require('./swagger/swaggerMiddleware'); 
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

swaggerMiddleware(app);

app.use('/', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
