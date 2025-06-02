# routes/contact.py

from flask import Blueprint, request, jsonify
from utils.email_sender import send_email

# Define a Blueprint for the /api path
contact_bp = Blueprint("contact", __name__, url_prefix="/api")

@contact_bp.route("/contact", methods=["POST"])
def handle_contact():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not (name and email and message):
        return jsonify({"error": "All fields are required."}), 400

    try:
        send_email(name, email, message)
        return jsonify({"status": "success"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
