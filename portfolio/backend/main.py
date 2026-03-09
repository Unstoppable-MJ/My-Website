import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import github, projects, contact, repos, leetcode

load_dotenv()

app = FastAPI(title="Portfolio API")

# Configure CORS
origins = [
    "http://localhost:5173",
    os.getenv("FRONTEND_URL", "*")
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def health_check():
    return {"status": "ok", "message": "Portfolio API is running"}

# Include routers
app.include_router(github.router, prefix="/github", tags=["GitHub"])
app.include_router(repos.router, prefix="/repos", tags=["GitHub"])
app.include_router(leetcode.router, prefix="/leetcode", tags=["LeetCode"])
app.include_router(projects.router, prefix="/projects", tags=["Projects"])
app.include_router(contact.router, prefix="/contact", tags=["Contact"])
