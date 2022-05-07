export interface Response {
  status: number;
  error?: string;
}

export interface UserRequest {
  id: number;
}

export interface UserResponse extends Response {
  username: string;
  full_name: string;
  email: string;
  phone_number: string;
  password_changed_at: string; // change later to actual date obj js
  created_at: string; // change later to actual date obj js
}

export interface ReminderRequest {
  id: number;
}

export interface ReminderResponse extends Response {
  id: number;
  full_name: string;
  personal_number: number;
  user: string;
  phone_number: string;
  created_at: string;
}