const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('<h1>🚀 CI/CD Pipeline Working Perfectly! Hello from Azure Web App!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});