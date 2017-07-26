from flask import request, Blueprint, redirect
from flask import jsonify
from enferno.extensions import client

api = Blueprint('api', __name__)

json_success = {
        "status": "Success!!"
    }
json_error = {
        "status": "Fail!!"
    }


@api.route('/<method>', methods=['POST'])
def index(method):
    if request.form['title']:
        title = request.form['title']
    else:
        title = ''
    if request.form['image']:
        image = request.form['image']
    else:
        image = ''
    if request.form['datetime']:
        datetime = request.form['datetime']
    else:
        datetime = ''
    if request.form['content']:
        content = request.form['content']
    else:
        content = ''
    if request.form['domain']:
        domain = request.form['domain']
    else:
        domain = ''

    if title == image == datetime == content == '':
        return jsonify({"status": "Can't blank"})
    else:
        posts = {
            "domain": domain,
            "title": title,
            "image": image,
            "datetime": datetime,
            "content": content
        }

    try:
        if method == 'voice':
            client.db.voice.insert_one(posts).inserted_id
            return jsonify(json_success)
        if method == 'bootai':
            client.db.bootai.insert_one(posts).inserted_id
            return jsonify(json_success)
    except:
        return jsonify(json_error)



@api.route('/<method>', methods=['GET'])
def test(method):
    return jsonify({'result': method})
