from flask_smorest import Blueprint
from flask.views import MethodView
from flaskr.controllers import UserController
from flaskr.schemas import UserSchema

bp = Blueprint("users", __name__, description="Operations on users")

controller = UserController()


@bp.route("/users")
class Users(MethodView):
    @bp.response(200, UserSchema(many=True))
    def get(self):
        """Get a list of all users"""
        return controller.get_users()

    @bp.arguments(UserSchema)
    @bp.response(201, UserSchema)
    def post(self, user_data):
        """Create a new user"""
        return controller.create_user(user_data)
