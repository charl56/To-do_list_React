import mysql.connector


def login_database(): 
    try:
        conn = mysql.connector.connect(
            host="localhost",
            user="",
            password="",
            database="apptaches"
        )
        return conn
    except ValueError:
        print("Connexion issue : "+ ValueError)
