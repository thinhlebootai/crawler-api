# -*- coding: utf-8 -*-
"""Extensions module. Each extension is initialized in the app factory located
in app.py
"""

from flask_pymongo import PyMongo
from bs4 import BeautifulSoup
from urllib import parse, request

client = PyMongo()
beauty = BeautifulSoup
html_parse = parse
html_request = request






