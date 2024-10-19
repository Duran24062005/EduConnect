from fastapi import FastAPI
from routes.students_routes import student_router

app = FastAPI()
app.title = "👩‍🏫EduConnect Backend 🖧"
app.description = " 🧠EduConnect Backend API's💡"
app.version = "1.0.0"
app.docs_url = "/docs"
app.openapi_url = "/openapi.json"


@app.get('/', tags=['Home'])
async def read_root():
    return {"message": "Welcome to EduConnect Backend API"}

app.include_router(student_router)