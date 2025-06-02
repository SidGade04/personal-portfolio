from flask import Flask, send_from_directory
from flask_cors import CORS
from routes.contact import contact_bp

app = Flask(__name__, static_folder="static", static_url_path="/")
CORS(app)

# Register the contact route
app.register_blueprint(contact_bp)

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_react(path):
    return send_from_directory("static", path or "index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
