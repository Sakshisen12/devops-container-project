const express = require('express');
const app = express();
// Bind to 0.0.0.0 so Azure can route external traffic into the container
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('<h1>🚀 CI/CD Pipeline Working Perfectly! Hello from Azure Web App!</h1>');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
