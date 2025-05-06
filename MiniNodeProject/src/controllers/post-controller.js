const users = [];
const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");
const { use } = require("../Routes/itemRoutes");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  console.log("AuthHeader", authHeader);
  console.log("token", token);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    next();
  });
};

const login = (req, res) => {
  console.log("Write a logic to check the Authentication");
  let username = req.body.uname;
  let pwd = req.body.pwd;

  users.forEach(async (user) => {
    if (user.user === username) {
      if (await bcryptjs.compare(pwd, user.password)) {
        let token = await authorization1(username, pwd);
        res.status(200).json({
          message: "success",
          accessToken: token,
        });
      } else {
        res.send("Invalid Password");
      }
    } else {
      res.json({
        message: "Invalid User",
      });
    }
  });

  const authorization1 = async (username, pwd) => {
    const user = { uname: username };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    return accessToken;
  };
};

const signup = async (req, res) => {
  //User will send the username and password , we need to store it in the Array or DB
  const username = req.body.uname;
  const pwd = req.body.pwd;

  let salt = await bcryptjs.genSalt(10); //It'll generate any random number
  let hashedpwd = await bcryptjs.hash(pwd, salt); //Encrypt the passoword
  users.push({ user: username, password: hashedpwd });

  console.log("Users", users);
  res.status(200).json({ Status: 200, message: "success" });
};

const listAllUsers = async (req, res) => {
  //create an Array to push all the users
  let arr = [];
  users.forEach((usr) => {
    arr.push(usr.user);
  });

  res.send(arr);
};

const userExist = async (req, res) => {
  console.log(req.body);
  let user1 = req.body.uname;
  console.log("user", user1);
  let flag = false;
  users.forEach((usr) => {
    usr.user === user1 ? (flag = true) : (flag = false);
  });

  if (flag == true) {
    res.status(200).json({
      status: "Exist",
    });
  } else {
    res.status(201).json({
      status: "Not Exist",
    });
  }
};

module.exports = { login, signup, listAllUsers, userExist, authenticateToken };
