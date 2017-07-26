from flask import request, Blueprint, redirect
from flask import jsonify
from enferno.extensions import client

root = Blueprint('api', __name__)


@root.route('/', methods=['GET'])
def index():
    return jsonify({'result': 'Success!!'})


