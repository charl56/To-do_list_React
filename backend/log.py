import mysql.connector


def login_database():
    try:
        conn = mysql.connector.connect(
            host="localhost",
            user="root",
            password="root",
            database="apptaches"
        )
        return conn
    except ValueError:
        print("Connexion issue : "+ ValueError)
