import json
from flask import Flask
from data import api_data, cold_data


app = Flask(__name__)


@app.route('/')
def index():
    return json.dumps(api_data)


@app.route('/cold')
def cold():
    return json.dumps(cold_data)


app.run()