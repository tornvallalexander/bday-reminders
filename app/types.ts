
export interface UserRequest {
  id: number;
}

export interface UserResponse {
  username: string;
  full_name: string;
  email: string;
  phone_number: string;
  password_changed_at: string; // change later to actual date obj js
  created_at: string; // change later to actual date obj js
}