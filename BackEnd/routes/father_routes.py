from fastapi import APIRouter
from fastapi.responses import JSONResponse
from educonnect_db import fathers_table

fathers_router = APIRouter()


@fathers_router.get('/fathers', tags=['Fathers'])
async def get_students():
    fathers = fathers_table
    return JSONResponse(content=fathers, media_type="application/json")