import { authenticate } from "../utils/auth";

const handleLogin = (username: string, password: string) => {
  const user = authenticate(username, password);

  if (user) {
    console.log(` Login Exitoso  ${user.fullName}`);
    return user;
  } else {
    console.log(" Credenciales incorrectas");
    return null;
  }
};