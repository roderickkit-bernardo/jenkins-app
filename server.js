// Developer: Roderick Bernardo
// Purpose: Sample app for the Jenkins lab

const app = require("./app");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
