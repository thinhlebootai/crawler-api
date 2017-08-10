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
    message = json_data.get('question')
    list_options = []
    if message == '1':
        list_options = [
            {"key": "1", "value": "Options 1"},
            {"key": "2", "value": "Options 2"},
            {"key": "3", "value": "Options 3"}
        ]
        return jsonify({"response": "Select options below", "options": list_options})
    return jsonify({"response": json_data.get('question'), "options": list_options})