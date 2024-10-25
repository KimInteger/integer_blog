// src/lib/checkPassword.ts

const checkPassWord = (password: number): boolean => {
  const currentPassword = parseInt(process.env.REACT_APP_PASSWORD || "0", 10);

  if (password === currentPassword) {
    return true;
  } else {
    return false;
  }
};

export default checkPassWord ;