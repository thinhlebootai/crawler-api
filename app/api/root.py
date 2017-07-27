from flask import request, Blueprint, redirect, render_template, send_file, jsonify
from app.extensions import client

root = Blueprint('root', __name__)


@root.route('/', methods=['GET'])
def index():
    return send_file('index.html')





