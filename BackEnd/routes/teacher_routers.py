from fastapi import APIRouter
from fastapi.responses import JSONResponse
from educonnect_db import teachers_table

teachers_router = APIRouter()


@teachers_router.get('/teachers', tags=['Teachers'])
async def get_students():
    teachers = teachers_table
    return JSONResponse(content=teachers, media_type="application/json")