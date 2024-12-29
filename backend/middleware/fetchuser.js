const jwt = require('jsonwebtoken');
const JWT_SECRET = "Ashnaisagood$girl"; // Ensure this is the same secret used when signing the token

const fetchuser = (req, res, next) => {
    // Get the token from the auth-token header
    const token = req.header('auth-token');

    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded.user;  // Store the user information in the request object
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).send({ error: "Invalid or expired token" });
    }
}

module.exports = fetchuser;
