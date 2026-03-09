from fastapi import APIRouter
import httpx

router = APIRouter()

@router.get("/")
async def get_leetcode_stats():
    # Using the specified LeetCode stats API
    username = "Unstoppable-MJ"
    url = f"https://leetcode-stats-api.herokuapp.com/{username}"
    # Note: leetcode-stats.vercel.app returns SVG. leetcode-stats-api.herokuapp.com returns JSON.
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(url, timeout=10.0)
            if response.status_code == 200:
                data = response.json()
                if data.get("status") == "success":
                    return {
                        "totalSolved": data.get("totalSolved"),
                        "easySolved": data.get("easySolved"),
                        "mediumSolved": data.get("mediumSolved"),
                        "hardSolved": data.get("hardSolved"),
                        "ranking": data.get("ranking"),
                        "acceptanceRate": data.get("acceptanceRate")
                    }
            return {"error": "Could not fetch LeetCode data", "status_code": response.status_code}
        except Exception as e:
            return {"error": str(e)}
