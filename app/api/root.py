from flask import request, Blueprint, redirect, render_template, send_file, jsonify
from app.extensions import client

root = Blueprint('', __name__)


@root.route('/valeo/chatbot/client/v1', methods=['GET'])
def index():
    return send_file('./client/dist/index.html')



