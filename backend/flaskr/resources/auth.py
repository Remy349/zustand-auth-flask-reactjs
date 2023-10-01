from flask_smorest import Blueprint
from flask.views import MethodView
from flaskr.controllers import AuthController
from flaskr.schemas import UserSchema
from flask_jwt_extended import jwt_required

bp = Blueprint("auth", __name__, description="Authentication with JWT")

controller = AuthController()


@bp.route("/auth/login")
class Login(MethodView):
    @bp.arguments(UserSchema)
    @bp.response(200)
    def post(self, user_data):
        """Login and create an access token"""
        return controller.login(user_data)


@bp.route("/auth/profile")
class Profile(MethodView):
    @jwt_required()
    @bp.response(200, UserSchema)
    def get(self):
        """Get user´s profile data using the access token"""
        return controller.profile()
