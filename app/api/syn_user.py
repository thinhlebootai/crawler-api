from flask import request, Blueprint, send_file
import requests
from flask import jsonify
from app.extensions import client, parser
from marshmallow import fields, validate
from bson import ObjectId
from app.utils import parse_req

api = Blueprint('api_user', __name__, url_prefix='/api/v1/user')


@api.route('/syn_user', methods=['GET'])
def syn_user():
    list_user = []
    res = requests.post('https://staging-api.valeo-app.de/ki/users', headers={
        'Token': 'cPMpVGarWUUmRG6MpadXV54Si3Sh26K6kAf9oYjM203ABBAB6NY8TKvWwTTx3661s36UCXD7g2cAVx1HPDTW7AWWXZ'})
    user = res.json()
    for item in user['users']:
        item['_id'] = str(ObjectId())
        list_user.append(item)
    client.db.users.insert(list_user)
    return jsonify({'success': True})


@api.route('/', methods=['GET'])
def get_all():
    list_user = []
    data = client.db.users.find()
    users = list(data)
    for item in users:
        list_user.append(item)
    return jsonify({'users': list_user})


@api.route('/<id>', methods=['GET'])
def get_one(id):
    data = client.db.users.find({"_id": id})
    user = list(data)
    if user.count() > 0:
        return jsonify({'user': user[0]})


@api.route('/add', methods=['POST'])
def add_attr():
    params = {
        'id': fields.Number(),
        'name': fields.String(),
        'lname': fields.String(),
        'bday': fields.String(),
        'age': fields.String(),
        'height': fields.String(),
        'weight': fields.String(),
        'about': fields.String(),
        'home': fields.String(),
        'image': fields.String(),
        'temp_location': fields.String(),
        'verified': fields.Number(),
        'allergie': fields.List(fields.String()),
        'sport': fields.List(fields.String())
    }
    json_data = parse_req(params)

    new_user = dict(
        name=json_data.get('name'),
        id=json_data.get('id'),
        lname=json_data.get('lname'),
        bday=json_data.get('bday'),
        age=json_data.get('age'),
        height=json_data.get('height'),
        weight=json_data.get('weight'),
        home=json_data.get('home'),
        temp_location=json_data.get('temp_location'),
        allergie=json_data.get('allergie'),
        image=json_data.get('image'),
        sport=json_data.get('sport'),
        about=json_data.get('about')
    )

    new_user['_id'] = str(ObjectId())

    _id = client.db.users.insert(new_user)
    return jsonify({'success': str(_id)})


@api.route('/edit/<id>', methods=['PUT'])
def edit_user(id):
    params = {
        'id': fields.Number(),
        'name': fields.String(),
        'lname': fields.String(),
        'bday': fields.String(),
        'age': fields.String(),
        'height': fields.String(),
        'weight': fields.String(),
        'about': fields.String(),
        'home': fields.String(),
        'image': fields.String(),
        'temp_location': fields.String(),
        'verified': fields.Number(),
        'allergie': fields.List(fields.String()),
        'sport': fields.List(fields.String())
    }
    json_data = parse_req(params)
    query = {"_id": id}

    data = client.db.users.find(query)
    if not data:
        return jsonify({'success': "cant not find user with _id"})

    keys = ['name', 'lname', 'bday', 'age', 'height', 'weight', 'height', 'about', 'home', 'image', 'temp_location',
            'verified', 'allergie', 'sport']
    update_data = {}
    for k in keys:
        if k in json_data:
            update_data[k] = json_data[k]

    client.db.users.update(query, {'$set': update_data})

    return jsonify({'result': str('success')})
