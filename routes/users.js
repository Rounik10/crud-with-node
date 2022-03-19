// All routes in this file are already starting with /
// we can add /xyz to create nested route like https://localhost:PROT/users/xyz

import express from "express";

import {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controller/users.js";

/** Instantiated router */
const router = express.Router();

/** Defined a get request on route users */
router.get("/", getUsers);

/** Add user to DB */
router.post("/add", addUser);

/** Get user with id */
router.get("/:id", getUser);

/** Deleting user with given ID from db */
router.delete("/:id", deleteUser);

/** Updating user */
router.patch("/:id", updateUser);

export default router;
