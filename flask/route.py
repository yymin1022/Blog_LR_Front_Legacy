from flask import (Flask, render_template)

app = Flask(__name__)

@app.route("/")
def main():
    return render_template("index.html", flask_token="Hello, World!")

@app.route("/about")
def about():
    return render_template("about.html")