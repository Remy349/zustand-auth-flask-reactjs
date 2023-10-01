import sqlalchemy as sa
from sqlalchemy.orm import Mapped, mapped_column
from flaskr.extensions import db
from werkzeug.security import generate_password_hash, check_password_hash


class UserModel(db.Model):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(sa.Integer, primary_key=True)
    username: Mapped[str] = mapped_column(
        sa.String(20),
        nullable=False,
        unique=True,
    )
    password: Mapped[str] = mapped_column(sa.String(180), nullable=False)

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)
