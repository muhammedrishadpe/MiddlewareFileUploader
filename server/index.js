const express = require("express");
const cors = require("cors");

const profileRoute = require("./routes/profile");
const todoRoute = require("./routes/todo");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"))

app.use("/api/todo", todoRoute);
app.use("/api/profile", profileRoute);
app.use("*", (req,res) => {
    res.status(404).json({
        message:"this Route does not exist",
    })
});
app.use((error, req, res, next) => {
  const status = error.status || 500;
  let message = error.message || "Somthing went wrong, Please try again";
  if (status === 400) {
     message: `${JSON.stringify(
      error.fields.body
    )}: This attribute is not accepted, Required payloads : ${
      error.fields.required
    }`;
  }
  res.status(status).json({
    message: message,
  });
});
const PORT = 3006;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
