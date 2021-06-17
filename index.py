from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def _handle_index():
    return render_template("index.html")


app.run()
