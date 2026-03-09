# Full-Stack Developer Portfolio

A high-end, futuristic developer portfolio built with React (Vite, Tailwind CSS, Framer Motion) and Python (FastAPI).

## Project Structure

- `frontend/`: React application using Vite.
- `backend/`: FastAPI application handling GitHub and LeetCode integrations.

## Local Development

### Backend
1. `cd backend`
2. `pip install -r requirements.txt`
3. `uvicorn main:app --reload`

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`

## Deployment (Render)

### Backend (Web Service)
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `uvicorn main:app --host 0.0.0.0 --port 10000`
- **Env Vars**: 
  - `GITHUB_USERNAME`: Your GitHub username
  - `LEETCODE_USERNAME`: Your LeetCode username

### Frontend (Static Site)
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Env Vars**:
  - `VITE_API_BASE_URL`: URL of your deployed backend
