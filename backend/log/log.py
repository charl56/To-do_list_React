import mysql.connector
from dotenv import dotenv_values, load_dotenv
import os
from os.path import join, dirname

def login_database(): 
    
    try: 
        print("config dotenv")

        dotenv_path = join(dirname(__file__), '.env')
        print(dotenv_path)
        load_dotenv(dotenv_path)


        username = os.environ.get("username-db")
        password = os.environ.get("password-db")
        print(username, password)

   
        conn = mysql.connector.connect(
            host="localhost",
            user=username,
            password=password
            # database="apptaches"
        )
        return conn
    except ValueError:
        print("Connexion issue : "+ ValueError)
