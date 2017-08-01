from flask import request, Blueprint, redirect, send_file
from flask import jsonify
from app.extensions import client, beauty, html_parse, html_request

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
    if request.form['abstract']:
        abstract = request.form['abstract']
    else:
        abstract = ''
    if request.form['topic']:
        topic = request.form['topic']
    else:
        topic = ''

    if title == image == datetime == content == abstract == topic == '':
        return jsonify({"status": "Can't blank"})
    else:
        posts = {
            "domain": domain,
            "title": title,
            "image": image,
            "datetime": datetime,
            "content": content,
            "topic": topic,
            "abstract": abstract
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


@api.route('/', methods=['GET'])
def test():
    return send_file('./client/dist/index.html')


@api.route('/get_all/<method>', methods=['GET'])
def get_all_element(method):
    list = []
    if method == 'voice':
        data = client.db.voice.find()
        for item in data:
            list.append(item)
        return jsonify({'result': list})
    if method == 'bootai':
        data = client.db.bootai.find()
        for item in data:
            list.append(item)
        return jsonify({'result': list})


@api.route('/login', methods=['POST'])
def login_api():
    json = request.json
    if json is None:
        return jsonify({'result': 'error, in json'})
    if json['username'] and json['username'] is not None:
        username = json['username']
    if json['password'] and json['password'] is not None:
        password = json['password']

    if username is not None and password is not None:
        query = {'username': username, 'password': password}
        login = client.db.user.find_one(query)
        if login is not None:
            return jsonify({'result': 'success'})
        else:
            return jsonify({'result': 'fail'})


@api.route('/getdomain', methods=['POST'])
def get_data():
    json = request.json
    if json['domain'] is not None:
        domain = json['domain']
        query_domain = {'domain': domain}
        scheme, netloc, path, query, fragment = html_parse.urlsplit(domain)
        opener = html_request.build_opener()
        opener.addheaders = [('User-agent', 'Mozilla/5.0')]
        html_doc = opener.open(domain)
        soup_home_page = beauty(html_doc, 'html.parser')
        data = client.db.voice.find()
        result = {"content": "",
                  "datetime": "",
                  "url": "",
                  "image": "",
                  "title": "",
                  "abstract": "",
                  "topic": []}
        for item in data:
            if netloc in item["domain"]:
                # extract content (long text)
                try:
                    long_text_elements = soup_home_page.select(item["content"])
                    long_text = ""
                    for el_ in long_text_elements:
                        long_text += el_.text
                    cleaned_text = clean_text(long_text)
                    result["content"] = cleaned_text
                except Exception as e:
                    result["content"] = "not found"

                # extract date
                try:
                    date_time_text = soup_home_page.select(item["datetime"])[0].text
                    result["datetime"] = clean_text(date_time_text)
                except Exception as e:
                    result["datetime"] = "not found"

                # extract url
                result["url"] = domain

                # extract image
                try:
                    result["image"] = soup_home_page.select(item["image"])[0].get("src")
                except Exception as e:
                    result["image"] = "not found"

                # extract title
                try:
                    title = soup_home_page.select(item["title"])[0].text
                    cleaned_title = clean_text(title)
                    result["title"] = cleaned_title
                except Exception as e:
                    result["title"] = "not found"

                # extract abstract
                try:
                    abstract = soup_home_page.select(item["abstract"])[0].text
                    result["abstract"] = abstract
                except Exception as e:
                    result["abstract"] = "not found"

                # extract topic
                try:

                    topics = soup_home_page.select(item["topic"])
                    re_tp = []
                    for topic in topics:
                        re_tp.append(topic.text)
                    result["topic"] = re_tp
                except:
                    result["topic"] = "not found"

        if result is not None:
            return jsonify(result)
        else:
            return jsonify({'result': 'fail'})


def clean_text(text):
    text_new = text.splitlines()
    result_ = "".join(text_new)
    result_.rstrip()
    return result_