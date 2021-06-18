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


@app.get("/", response_class=HTMLResponse)
def handle_index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/about", response_class=HTMLResponse)
async def about(request: Request):
    return templates.TemplateResponse("about.html", {"request": request})


@app.get("/post/{post}")
async def handle_post(request: Request, post: str):
    _content = open(f"content/{post}.md")
    content = markdown(_content.read())
    _content.close()
    return templates.TemplateResponse("post.html", {"request": request, "content": content})
