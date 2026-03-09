from fastapi import APIRouter
import httpx

router = APIRouter()

GITHUB_USERNAME = "Unstoppable-MJ"

@router.get("/")
async def get_repos():
    url = f"https://api.github.com/users/{GITHUB_USERNAME}/repos?sort=updated&per_page=6"
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        if response.status_code == 200:
            repos = response.json()
            return [
                {
                    "name": repo.get("name"),
                    "description": repo.get("description"),
                    "language": repo.get("language"),
                    "stars": repo.get("stargazers_count"),
                    "url": repo.get("html_url")
                } for repo in repos
            ]
        return {"error": "Could not fetch repositories"}
