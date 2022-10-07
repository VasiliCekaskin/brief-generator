interface User {
  id: Number;
  email: string;
  passwordHash: string;
  email_verified: Boolean;
}

export default User;
