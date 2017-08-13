from flask import request, Blueprint, redirect, render_template, send_file, jsonify
from app.extensions import client

api = Blueprint('', __name__,url_prefix='/')


@api.route('/', methods=['GET'])
def index():
    return send_file('./valeo/dist/prod/index.html')



