from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_smorest import Api
from flask_jwt_extended import JWTManager
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()
api = Api()
jwt = JWTManager()
cors = CORS()
