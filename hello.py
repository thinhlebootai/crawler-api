from enferno.app import create_app
from enferno.settings import *


CONFIG = ProdConfig if os.environ.get('FLASK_DEBUG') == '0' else DevConfig

app = create_app()

if __name__ == '__main__':
    context = ('ssl-bundle.crt', 'lovedramatv.key')  # certificate and key files
    app.run(host='0.0.0.0')
