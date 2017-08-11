# -*- coding: utf-8 -*-
"""Extensions module. Each extension is initialized in the app factory located
in app.py
"""

from flask_pymongo import PyMongo
from bs4 import BeautifulSoup
from urllib import parse, request
from webargs.flaskparser import FlaskParser
from flask_apscheduler import APScheduler
from pytz import utc

scheduler = APScheduler()
parser = FlaskParser()
client = PyMongo()
beauty = BeautifulSoup
html_parse = parse
html_request = request
utc_time = utc




