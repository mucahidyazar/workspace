"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Not permitted");
}
router.get("/protected", requireAuth, function (req, res) {
    res.send("Welcome to protected route, logged in user!");
});
router.get("/", function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div>You are logged in</div>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <div>You are not logged in</div>\n        <a href=\"/login\">Login</a>\n      </div>\n    ");
    }
});
router.get("/login", function (req, res) {
    res.send("\n    <form method=\"POST\">\n     <div>\n      <label>Email</label>\n      <input name=\"email\" />\n     </div>\n     <div>\n      <label>Password</label>\n      <input name=\"password\" type=\"password\" />\n     </div>\n     <button>Submit</button>\n    </form>\n  ");
});
//Bu Request ve Response aslinda cok luzumsuz typescript kullanimi
//Fakat bodyden yakalayacaginzi degerleri interface ile boyle sinirlandirabilirsiniz.
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && pasword && email === "hi@hi.com" && password === "password") {
        // mark this person as logged in
        req.session = { logedIn: true };
        //redirect them to the root
        res.redirect("/");
    }
    else {
        res.send("Invalid email or password");
    }
});
router.get("/logout", function (req, res) {
    req.session = undefined;
    res.redirect("/");
});
