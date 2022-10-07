interface EmailVerification {
  id: Number;
  user_id: Number;
  verification_hash: String;
  created_at: String;
  expires_at: String;
  verified_at: String;
}

export default EmailVerification;
