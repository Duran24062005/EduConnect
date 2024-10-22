from fastapi import FastAPI
from fastapi.responses import JSONResponse
from routes.teacher_routers import teachers_router
from routes.father_routes import fathers_router
from routes.students_routes import students_router
# from routes.courses_routes import courses_router
# from routes.auth_routes import auth_router

app = FastAPI()
app.title = "👩‍🏫EduConnect Backend 🖧"
app.description = " 🧠EduConnect Backend API's💡"
app.version = "1.0.0"
app.docs_url = "/docs"
app.openapi_url = "/openapi.json"


@app.get('/', tags=['Login'])
async def login():
    return {"message": "Welcome to EduConnect Backend API"}

app.include_router(teachers_router)
app.include_router(fathers_router)
app.include_router(students_router)