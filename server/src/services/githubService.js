const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

const REPOS_QUERY = `
  query {
    viewer {
      repositories(first: 30, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          name
          description
          url
          isPrivate
          updatedAt
        }
      }
    }
  }
`;

export async function fetchRepositories() {
  const res = await fetch(GITHUB_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: REPOS_QUERY }),
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const { data, errors } = await res.json();

  if (errors) {
    throw new Error(errors[0].message);
  }

  return data.viewer.repositories.nodes;
}
