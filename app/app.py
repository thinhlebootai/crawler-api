# -*- coding: utf-8 -*-

from flask import Flask
from .settings import ProdConfig, DevConfig
from .extensions import client, background_scheduler
from .api.view import api
from .api.root import root
from .api import message
from .api import syn_user
from flask_cors import CORS
from flask_sslify import SSLify
from .utils import request_post, request_get
import requests


def create_app(config_object=DevConfig):
    app = Flask(__name__, static_url_path="", static_folder="./client_chatbot/dist/dev",
                template_folder="./client_chatbot/dist/dev")
    # SSLify(app)
    CORS(app)
    app.config.from_object(config_object)
    register_extensions(app)
    register_blueprints(app)
    return app


def register_extensions(app):
    client.init_app(app)
    start_jobs()
    return None


def register_blueprints(app):
    app.register_blueprint(api, url_prefix='/api')
    app.register_blueprint(root, url_prefix='/valeo/chatbot/client/v2')
    app.register_blueprint(message.api)
    app.register_blueprint(syn_user.api)
    return None


def start_jobs():
    scheduler = background_scheduler()
    scheduler.add_job(syn_user_job, 'interval', minutes=2)
    scheduler.start()


def syn_user_job():
    print('success')




