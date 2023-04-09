import express from "express";
import productRouter from "./routes/products.router.js";
import routerCar from "./routes/cart.router.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/static", express.static("./src/public"));
app.use("/api/carts", routerCar);
app.use("/api/products", productRouter);
app.listen(8080, () => {
  console.log("Estoy escuchando el puerto 8080");
});
