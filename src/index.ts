import app from "./app";

app.listen(Number(process.env.PORT), "127.0.0.1", () => {
  console.log(`Server is listening on 127.0.0.1:${process.env.PORT}`);
});
