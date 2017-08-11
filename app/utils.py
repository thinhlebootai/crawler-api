import requests
from flask import jsonify
from .extensions import parser


def request_get(url, params=None):
    params = params or {}
    response = requests.get(url, json=params)
    if response.ok:
        response = response.json()
        return jsonify(response)
    else:
        code = response.status_code
        response = response.json()
        return jsonify(response), code


def request_post(url, params=None):
    params = params or {}
    response = requests.post(url, json=params)
    if response.ok:
        response = response.json()
        return jsonify(response)
    else:
        code = response.status_code
        response = response.json()
        return jsonify(response), code


def parse_req(argmap):
    return parser.parse(argmap)
