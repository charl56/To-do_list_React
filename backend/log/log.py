import mysql.connector
from dotenv import dotenv_values


def login_database(): 
    
    try: 
        config = dotenv_values(".env")

        username = config.get("username")
        password = config.get("password")
        print(username, password)

   
        conn = mysql.connector.connect(
            host="localhost",
            user=username,
            password=password,
            database="apptaches"
        )
        return conn
    except ValueError:
        print("Connexion issue : "+ ValueError)
