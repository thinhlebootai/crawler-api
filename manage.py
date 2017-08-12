from app.app import create_app
from app.settings import *

CONFIG = ProdConfig if os.environ.get('FLASK_DEBUG') == '0' else DevConfig

app = create_app(CONFIG)


if __name__ == '__main__':
    app.run(host='0.0.0.0')
