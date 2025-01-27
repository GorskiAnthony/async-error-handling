// const router = require('express').Router();

const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

/**
 * Test route for the user controller
 * - getCallback
 * - getPromise
 */
// http://localhost:8000/user/getCallback
router.use("/getCallback", userController.getCallback);
// http://localhost:8000/user/getPromise
router.use("/getPromise", userController.getPromise);

/**
 * Test async route for the user controller
 * - getAsync
 * - getAsyncErrorHandled 🏆
 * - getAsyncErrorNotHandled
 */
router.use("/getAsync", userController.getAsync);
router.use("/getAsyncErrorHandled", userController.getAsyncErrorHandled);
router.use("/getAsyncErrorNotHandled", userController.getAsyncErrorNotHandled);

module.exports = router;
