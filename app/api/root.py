from flask import request, Blueprint, redirect
from flask import jsonify
from app.extensions import client

root = Blueprint('api', __name__, static_url_path="", static_folder="../fosec/static",
                 template_folder="../fosec/static")


@root.route('/', methods=['GET'])
def index():
    return jsonify({'result': 'Success!!'})
