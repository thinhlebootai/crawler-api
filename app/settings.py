# -*- coding: utf-8 -*-
import os

os_env = os.environ


class Config(object):
    SECRET_KEY = '3nF3Rn0'
    APP_DIR = os.path.abspath(os.path.dirname(__file__))  # This directory
    PROJECT_ROOT = os.path.abspath(os.path.join(APP_DIR, os.pardir))


class ProdConfig(Config):
    """Production configuration."""
    ENV = 'prod'
    DEBUG = False
    DEBUG_TB_ENABLED = False  # Disable Debug toolbar
    HOST = '0.0.0.0'
    MONGO_DBNAME = 'css_data'
    TEMPLATES_AUTO_RELOAD = False
    SERVER_MESSAGE = 'http://localhost:8890/api/v1'


class DevConfig(Config):
    """Development configuration."""
    HOST = '0.0.0.0'
    ENV = 'dev'
    DEBUG = True
    DEBUG_TB_ENABLED = True
    ASSETS_DEBUG = True  # Don't bundle/minify static assets
    CACHE_TYPE = 'simple'  # Can be "memcached", "redis", etc.
    MONGO_DBNAME = 'chatbot'
    TEMPLATES_AUTO_RELOAD = True
    MONGO_HOST = '46.101.137.23'
    SERVER_MESSAGE = 'http://localhost:8890/api/v1'

