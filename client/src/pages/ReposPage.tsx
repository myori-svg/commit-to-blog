import { useRepositories } from "../hooks/useRepositories";
import type { Repository } from "../api/github";

function RepoCard({ repo }: { repo: Repository }) {
  const updatedAt = new Date(repo.updatedAt).toLocaleDateString("ko-KR");

  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "block",
        padding: "16px 20px",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        textDecoration: "none",
        color: "inherit",
        textAlign: "left",
        transition: "border-color 0.15s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
        <span style={{ fontWeight: 600, color: "var(--text-h)", fontSize: "16px" }}>
          {repo.name}
        </span>
        {repo.isPrivate && (
          <span
            style={{
              fontSize: "11px",
              padding: "1px 7px",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              color: "var(--text)",
            }}
          >
            private
          </span>
        )}
      </div>
      {repo.description && (
        <p style={{ fontSize: "14px", margin: "0 0 8px", color: "var(--text)" }}>
          {repo.description}
        </p>
      )}
      <span style={{ fontSize: "12px", color: "var(--text)" }}>
        업데이트 {updatedAt}
      </span>
    </a>
  );
}

export function ReposPage() {
  const { repos, loading, error } = useRepositories();

  return (
    <div style={{ padding: "48px 32px", maxWidth: "720px", margin: "0 auto", width: "100%" }}>
      <h1 style={{ marginBottom: "8px" }}>내 레포지토리</h1>
      <p style={{ marginBottom: "32px" }}>블로그로 만들 레포를 선택하세요.</p>

      {loading && <p>불러오는 중...</p>}

      {error && (
        <p style={{ color: "var(--accent)" }}>오류: {error}</p>
      )}

      {!loading && !error && repos.length === 0 && (
        <p>레포지토리가 없습니다.</p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {repos.map((repo) => (
          <RepoCard key={repo.name} repo={repo} />
        ))}
      </div>
    </div>
  );
}
