import json
from flask import Flask
from data import api_data, cold_data, hot_data


app = Flask(__name__)


@app.route('/')
def index():
    return json.dumps(api_data)


@app.route('/cold')
def cold():
    return json.dumps(cold_data)

@app.route('/hot')
def hot():
    return json.dumps(hot_data)


app.run()