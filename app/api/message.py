from flask import request, Blueprint, send_file
from flask import jsonify
from app.extensions import client, parser
from marshmallow import fields, validate
from app.utils import request_get, request_post

api = Blueprint('api_message', __name__, url_prefix='/api/v1/message')


@api.route('/search', methods=['POST'])
def send_message():
    params = {
        'question': fields.String()
    }
    json_data = parser.parse(params)

    return jsonify({"response": json_data.get('question')})

