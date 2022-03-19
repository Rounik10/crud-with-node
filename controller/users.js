import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const addUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with name: ${user.firstName} added to DB`);
};

export const getUser = (req, res) => {
  let id = req.params.id;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send("Successfully deleted user!");
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  let user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send("Updated user details!");
};
