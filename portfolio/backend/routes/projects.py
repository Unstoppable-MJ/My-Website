from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_projects():
    return [
        {
            "id": 1, 
            "title": "Stock Market Prediction System", 
            "description": "Machine learning project for stock price prediction and financial data analysis using advanced algorithms.", 
            "tech_stack": ["Python", "LSTM", "Pandas", "Scikit-Learn"],
            "github": "https://github.com/Unstoppable-MJ/Bizmetric_Mukteshwar/tree/main/stock_project",
            "live": "https://github.com/Unstoppable-MJ/Bizmetric_Mukteshwar/tree/main/stock_project"
        },
        {
            "id": 2, 
            "title": "AI Scam Detector", 
            "description": "AI-based system that detects and analyzes scam messages or fraudulent patterns using machine learning for enhanced security.", 
            "tech_stack": ["Python", "NLP", "TensorFlow", "FastAPI"],
            "github": "https://github.com/Unstoppable-MJ/AI-Scam-Detector",
            "live": "https://github.com/Unstoppable-MJ/AI-Scam-Detector"
        },
        {
            "id": 3, 
            "title": "BTC Forecasting", 
            "description": "High-accuracy forecasting models (ARIMA, CNN, RNN) for cryptocurrency market trend analysis.", 
            "tech_stack": ["Python", "ARIMA", "CNN", "RNN"],
            "github": "https://github.com/Unstoppable-MJ",
            "live": "https://github.com/Unstoppable-MJ"
        }
    ]
