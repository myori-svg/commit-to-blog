import { fetchRepositories } from "../services/githubService.js";

export async function getRepositories(req, res) {
  try {
    const repos = await fetchRepositories();
    res.json(repos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
