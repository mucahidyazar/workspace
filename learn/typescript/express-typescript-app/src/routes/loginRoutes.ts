import { Router, Request, Response, NextFunction } from "express";

const router = Router();

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("Not permitted");
}

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route, logged in user!");
});

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `);
  }
});

router.get("/login", (req, res) => {
  res.send(`
    <form method="POST">
     <div>
      <label>Email</label>
      <input name="email" />
     </div>
     <div>
      <label>Password</label>
      <input name="password" type="password" />
     </div>
     <button>Submit</button>
    </form>
  `);
});

//Bu Request ve Response aslinda cok luzumsuz typescript kullanimi
//Fakat bodyden yakalayacaginzi degerleri interface ile boyle sinirlandirabilirsiniz.
router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && pasword && email === "hi@hi.com" && password === "password") {
    // mark this person as logged in
    req.session = { logedIn: true };
    //redirect them to the root
    res.redirect("/");
  } else {
    res.send("Invalid email or password");
  }
});

router.get("/logout", (req, res) => {
  req.session = undefined;
  res.redirect("/");
});

export { router };
