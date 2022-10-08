interface User {
  id: Number;
  email: string;
  passwordHash: string;
  email_verified: boolean;
}

export default User;
