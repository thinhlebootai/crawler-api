from flask import request, Blueprint, redirect, render_template, send_file, jsonify
from app.extensions import client

root = Blueprint('', __name__)


@root.route('/', methods=['GET'])
def index():
    return send_file('./client/dist/index.html')



