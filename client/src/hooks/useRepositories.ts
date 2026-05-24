import { useEffect, useState } from "react";
import { fetchRepositories } from "../api/github";
import type { Repository } from "../api/github";

type State = {
  repos: Repository[];
  loading: boolean;
  error: string | null;
};

export function useRepositories(): State {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRepositories()
      .then(setRepos)
      .catch((err: unknown) => setError(err instanceof Error ? err.message : String(err)))
      .finally(() => setLoading(false));
  }, []);

  return { repos, loading, error };
}
