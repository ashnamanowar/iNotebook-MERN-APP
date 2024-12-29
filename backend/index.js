const connectToMongo = require('./db');
const cors = require('cors');
const express = require('express');

const app = express();
const port = 5000;

// Connect to MongoDB
connectToMongo();

// Middleware to handle CORS
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from the frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization', 'auth-token'], // Allowed headers
}));

// Middleware to parse JSON requests
app.use(express.json());

// Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Default route
app.get('/', (req, res) => {
    res.send('Hello ASHNA!');
});

// Start the server
app.listen(port, () => {
    console.log(`iNotebook backend listening on port ${port}`);
});
