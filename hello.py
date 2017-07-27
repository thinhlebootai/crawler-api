from app.app import create_app
from app.settings import *
from livereload import Server, shell

CONFIG = ProdConfig if os.environ.get('FLASK_DEBUG') == '0' else DevConfig

app = create_app(CONFIG)
# server = Server(app.wsgi_app)
# server.serve()

if __name__ == '__main__':
    context = ('ssl-bundle.crt', 'lovedramatv.key')  # certificate and key files
    app.run(host='0.0.0.0')
