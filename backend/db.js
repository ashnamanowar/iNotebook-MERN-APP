const mongoose = require('mongoose');

// URL-encoded password for MongoDB connection
const mongoURI = "mongodb+srv://manowarashna:ashnamongo@inotebook.iuvfx.mongodb.net/?retryWrites=true&w=majority&appName=iNotebook";

const connectToMongo = () => {
    mongoose.connect(mongoURI)
        .then(() => {
            console.log("Connected to MongoDB Successfully");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
};

module.exports = connectToMongo;
