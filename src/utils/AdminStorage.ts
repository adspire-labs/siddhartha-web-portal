// src/utils/adminStorage.ts
export interface AdminCredentials {
  email: string;
  password: string;
}

const DEFAULT_CREDENTIALS: AdminCredentials = {
  email: "sebss@gmail.com",
  password: "Optimistic@2082",
};

const STORAGE_KEY = "adminCredentials";

export function seedDefaultAdmin() {
  const existing = localStorage.getItem(STORAGE_KEY);
  if (!existing) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_CREDENTIALS));
  }
}

export function getAdminCredentials(): AdminCredentials | null {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : null;
}

export function updateAdminPassword(newPassword: string) {
  const creds = getAdminCredentials();
  if (creds) {
    const updated = { ...creds, password: newPassword };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
}
