import express from "express";
import bodyParser from "body-parser";
import path from "path";
import userRoute from "./routes/userRoute.mjs"

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve("./public")));

app.use("/api/user", userRoute);

app.listen(80, () => {
	console.log("服务端启动成功");
});
