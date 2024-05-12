import app from "./app";
//todo: remove  ||5000 in below line
// console.log(process.env.PORT);

const PORT = process.env.PORT ||5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
