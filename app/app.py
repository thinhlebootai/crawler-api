# -*- coding: utf-8 -*-

from flask import Flask
from .settings import ProdConfig, DevConfig
from app.extensions import client, scheduler
from .api.view import api
from .api import root
from .api import message
from .api import user
from flask_cors import CORS
from flask_sslify import SSLify
from .utils import request_post, request_get
from bson import ObjectId
import requests


def create_app(config_object):
    app = Flask(__name__, static_url_path="", static_folder="./valeo/dist/prod",
                template_folder="./valeo/dist/prod")
    # SSLify(app)
    CORS(app)
    app.config.from_object(config_object)
    register_extensions(app)
    register_blueprints(app)
    return app


def register_extensions(app):
    client.app = app
    client.init_app(app)
    scheduler.init_app(app)
    scheduler.start()


def register_blueprints(app):
    app.register_blueprint(api, url_prefix='/api')
    app.register_blueprint(root.api)
    app.register_blueprint(message.api)
    app.register_blueprint(user.api)


def start_jobs():
    with client.app.app_context():
        db = client.db.users
        list_user = []
        res = requests.post('https://staging-api.valeo-app.de/ki/users', headers={
            'Token': 'cPMpVGarWUUmRG6MpadXV54Si3Sh26K6kAf9oYjM203ABBAB6NY8TKvWwTTx3661s36UCXD7g2cAVx1HPDTW7AWWXZ'})
        user = res.json()
        for item in user['users']:
            item['_id'] = str(ObjectId())
            list_user.append(item)
        db.insert(list_user)




