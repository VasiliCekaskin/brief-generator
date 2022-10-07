interface EmailVerification {
  id: Number;
  user_id: Number;
  verification_hash: String;
  created_at: string;
  expires_at: string;
  verified_at: string;
}

export default EmailVerification;
