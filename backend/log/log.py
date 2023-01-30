import mysql.connector
from dotenv import dotenv_values, load_dotenv
import os
from os.path import join, dirname

def login_database(): 
    
    try: 
        ## Charge les variables d'utilisateur dans le fichier .env 
        dotenv_path = join(dirname(__file__), '.env')
        print(dotenv_path)
        load_dotenv(dotenv_path)

        username = os.environ.get("username-db")
        password = os.environ.get("password-db")
   
        conn = mysql.connector.connect(
            host="localhost",
            user=username,
            password=password,
            database="apptaches"
        )
        return conn
    except ValueError:
        print("Connexion issue : "+ ValueError)


def first_login_database(): 
    
    try: 
        ## Charge les variables d'utilisateur dans le fichier .env 
        dotenv_path = join(dirname(__file__), '.env')
        load_dotenv(dotenv_path)

        username = os.environ.get("username-db")
        password = os.environ.get("password-db")
        print(username, password)

   
        conn = mysql.connector.connect(
            host="localhost",
            user=username,
            password=password
        )
        
        cursor = conn.cursor()

        # Create db if not exist
        cursor.execute("CREATE DATABASE IF NOT EXISTS apptaches;")
        conn.commit()   

    except ValueError:
        print("Connexion issue : "+ ValueError)