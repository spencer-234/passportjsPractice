import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    })
})

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("https://spencer-234-passport-practice-static.onrender.com/");
})

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "Logged in",
            user: req.user,
            // cookies: req.cookies
        })
    }
})

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: "https://spencer-234-passport-practice-static.onrender.com/",
    failureRedirect: "/login/failed"
}))

export default router;