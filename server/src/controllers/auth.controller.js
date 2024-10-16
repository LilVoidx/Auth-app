const { hash } = require("bcryptjs");
const db = require("../config/db.config");
const { sign } = require('jsonwebtoken');
const { SECRET } = require("../constants");

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query("select user_id, email from users");
    return res.status(200).json({
      success: true,
      users: rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await hash(password, 10);

    await db.query("INSERT INTO users(email,password) values ($1 , $2)", [
      email,
      hashedPassword,
    ]);
    return res.status(201).json({
      success: true,
      message: "Registered Successfully!",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Registration failed!",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  let user = req.user
  payload = {
    id: user.user_id,
    email: user.email,
  }

  try {
    const token = await sign(payload, SECRET)

    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      success: true,
      message: "Logged in Successfully!",
    });

  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Login failed!",
      error: error.message,
    });
  }
};

exports.protected = async (req, res) => {
  try {
    const { rows } = await db.query("select user_id, email from users");
    return res.status(200).json({
      success: true,
      users: rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};
