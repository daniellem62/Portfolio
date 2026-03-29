const GITHUB_API_URL = "https://api.github.com"
const GITHUB_USERNAME = "daniellem62" // Replace with your actual GitHub username

export async function fetchGitHubActivity() {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/events/public`)
    if (!response.ok) {
      throw new Error("Failed to fetch GitHub activity")
    }
    const data = await response.json()
    return data.slice(0, 5).map((event: any) => ({
      type: event.type,
      repo: event.repo.name,
      message: event.payload.commits ? event.payload.commits[0].message : event.type,
      date: new Date(event.created_at).toLocaleDateString(),
    }))
  } catch (error) {
    console.error("Error fetching GitHub activity:", error)
    return []
  }
}
