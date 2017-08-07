# -*- coding: utf-8 -*-

from flask import Flask
from .settings import ProdConfig
from .extensions import client
from .api.view import api
from .api.root import root
from flask_cors import CORS
from flask_sslify import SSLify


def create_app(config_object=ProdConfig):
    app = Flask(__name__, static_url_path="", static_folder="./client/dist",
                template_folder="./client/dist")
    # SSLify(app)
    app.config.from_object(config_object)
    register_extensions(app)
    register_blueprints(app)
    return app


def register_extensions(app):
    client.init_app(app)
    return None


def register_blueprints(app):
    app.register_blueprint(api, url_prefix='/api')
    app.register_blueprint(root, url_prefix='/valeo/chatbot/client/v1')
    return None
