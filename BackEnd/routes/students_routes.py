from fastapi import APIRouter
from fastapi.responses import JSONResponse
from educonnect_db import students_table

student_router = APIRouter()


@student_router.get('/students', tags=['Students'])
async def get_students():
    students = students_table
    return JSONResponse(content=students, media_type="application/json")