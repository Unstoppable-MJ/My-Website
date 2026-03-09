from fastapi import APIRouter
import httpx

router = APIRouter()

GITHUB_USERNAME = "Unstoppable-MJ"

@router.get("/")
async def get_github_data():
    url = f"https://api.github.com/users/{GITHUB_USERNAME}"
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        if response.status_code == 200:
            data = response.json()
            return {
                "username": data.get("login"),
                "avatar": data.get("avatar_url"),
                "public_repos": data.get("public_repos"),
                "followers": data.get("followers"),
                "following": data.get("following"),
                "profile_url": data.get("html_url"),
                "bio": data.get("bio")
            }
        return {"error": "Could not fetch GitHub data"}
