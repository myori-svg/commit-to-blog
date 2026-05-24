const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export type Repository = {
  name: string;
  description: string | null;
  url: string;
  isPrivate: boolean;
  updatedAt: string;
};

export async function fetchRepositories(): Promise<Repository[]> {
  const res = await fetch(`${API_BASE}/api/github/repos`);
  if (!res.ok) throw new Error(`Failed to fetch repos: ${res.status}`);
  return res.json();
}
