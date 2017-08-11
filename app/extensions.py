# -*- coding: utf-8 -*-
"""Extensions module. Each extension is initialized in the app factory located
in app.py
"""

from flask_pymongo import PyMongo
from bs4 import BeautifulSoup
from urllib import parse, request
from webargs.flaskparser import FlaskParser
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.jobstores.mongodb import MongoDBJobStore
from pytz import utc

parser = FlaskParser()
client = PyMongo()
beauty = BeautifulSoup
html_parse = parse
html_request = request
mongodb_jobs_store = MongoDBJobStore
background_scheduler = BackgroundScheduler
utc_time = utc




