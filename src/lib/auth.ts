// Simple frontend authentication using localStorage
// This is for staff preview access only, not secure backend auth

const AUTH_KEY = 'xsphere_staff_auth';
const AUTH_USERNAME = 'staff';
const AUTH_PASSWORD = 'xsphere2026';

export interface AuthState {
  isAuthenticated: boolean;
}

export function login(username: string, password: string): boolean {
  if (username === AUTH_USERNAME && password === AUTH_PASSWORD) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(AUTH_KEY, 'authenticated');
    }
    return true;
  }
  return false;
}

export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(AUTH_KEY);
  }
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return localStorage.getItem(AUTH_KEY) === 'authenticated';
}

