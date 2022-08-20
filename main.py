from flask import Flask, render_template
from mcstatus import JavaServer

server = JavaServer.lookup("mc.theflyingbirds.net")

status = server.status()

playerCount = status.players.online

app = Flask("__main__")

@app.route("/")
def home():
    return render_template("index.html", playerCount=playerCount)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)