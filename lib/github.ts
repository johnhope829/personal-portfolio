// This file would contain the actual GitHub API integration
// Below is a placeholder for the real implementation

export interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
  language: string
  stargazers_count: number
  forks_count: number
  updated_at: string
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`)

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos = await response.json()
    return repos
  } catch (error) {
    console.error("Error fetching GitHub repos:", error)
    return []
  }
}
