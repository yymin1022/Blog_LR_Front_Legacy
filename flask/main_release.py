from flask import (Flask, render_template)

app = Flask("__main__")

@app.route("/")
def my_index():
    return render_template("index.html", flask_token="Hello, World!")

if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 80)