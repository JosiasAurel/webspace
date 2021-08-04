from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from markdown import markdown
import mistune

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

# set templates
templates = Jinja2Templates(directory="templates")
posts = Jinja2Templates(directory="templates/post")


@app.get("/", response_class=HTMLResponse)
def handle_index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/about", response_class=HTMLResponse)
async def about(request: Request):
    return templates.TemplateResponse("about.html", {"request": request})


@app.get("/{page}", response_class=HTMLResponse)
async def show_page(request: Request, page: str):
    try:
        return templates.TemplateResponse(f"{page}.html", {"request": request})
    except:
        return "Could not find requested page"


@app.get("/post/{post}")
async def handle_post(request: Request, post: str):
    try:
        return posts.TemplateResponse(f"/{post}.html", {"request": request})
    except:
        return "Something went wrong"


@app.get("/personal/log00")
def _log00(request: Request):
    return templates.TemplateResponse("log00.html", {"request": request})
