import express from "express";
const app = express();
// Middleware
app.use(express.json());
// Connections and Listeners
app.listen(5000, () => console.log('Server Open'));
//# sourceMappingURL=index.js.map