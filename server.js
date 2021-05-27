const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// connect to db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB connected'))
    .catch(err => console.log('DB CONNECTION ERROR: ', err));



app.get('/', (req, res) => {
    res.json({
        data: `you are at the root of the server js with turn on port ${port}`
    });
});

// import des routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

// app middlewares
if ((process.env.NODE_ENV = 'development')) {
    app.use(cors({ origin: `http://localhost:3000` }));
}
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(cors()); // allows all origins


//middleware 
app.use('/api',authRoutes);
app.use('/api',userRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`API is running on port ${port} - ${process.env.PORT}`);
});