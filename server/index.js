import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import 'dotenv/config';
import passport from "passport";
import * as passportSetup from "./passport.js";

import authRoute from "./routes/auth.js";

const app = express();

app.use(express.json());
app.use(cookieSession({
    name: "session",
    keys: [process.env.COOKIEKEY],
    maxAge: 24 * 60 * 60 * 100
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
}))

app.use("/auth", authRoute);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})