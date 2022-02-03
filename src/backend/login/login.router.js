const router = require("express").Router();
const controller = require("./login.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
    .route("/login")
    .get(controller.login)
    .all(methodNotAllowed)