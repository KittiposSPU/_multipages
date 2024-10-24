const users = [
  {
    user: "admin",
    pass: "admin",
    role: "admin",
    token: "user",
  },
];

export function verifyUser(user, pass) {
  const userFound = users.find((u) => {
    return u.user === user && u.pass === pass;
  });

  return userFound ? { role: userFound.role, token: userFound.token } : null;
}
