from flask import Flask, jsonify, request
from flask_cors import CORS
import json 
from log import *
# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})


# Route pour récupérer toutes les tâches dans la BDD
@app.route('/getTachesListe', methods=['GET'])
def getTachesListe():
    try:
        # Connection bdd
        conn = login_database()
        cursor = conn.cursor()

        requete_sql = "SELECT * FROM tacheListes;"

        cursor.execute(requete_sql)

        # Transforme les données reçu en tableau
        data = cursor.fetchall() 

        # Envoie le resultat au back en Json
        resp = {"success": True, "DataTaches": data}
        return jsonify(resp), 200 
   
    except Exception as e:
        return "error: " + str(e)

# Route pour supprimer une tâche à la BDD
@app.route('/DeleteTache', methods=['POST'])
def DeleteTache():
    try:
        # data from front
        id = str(request.json['id'])

        # Connection bdd
        conn = login_database()
        cursor = conn.cursor()

        requete_sql = "DELETE FROM tacheListes WHERE idUnique="+id+";"

        cursor.execute(requete_sql)
        conn.commit()    
        
        # Envoie le resultat au back en Json
        resp = {"success": True}
        return jsonify(resp), 200 
   
    except Exception as e:
        return "error: " + str(e)

# Route pour ajouter une tâche à la BDD
@app.route('/AddTache', methods=['POST'])
def AddTache():
    try:
        # data from front
        name = str(request.json['name'])
        state = str(request.json['state'])

        # Connection bdd
        conn = login_database()
        cursor = conn.cursor()

        requete_sql = "INSERT INTO tacheListes (name, state) VALUES ('"+name+"', '"+state+"');"

        cursor.execute(requete_sql)
        conn.commit()    
        
        # Envoie le resultat au back en Json
        resp = {"success": True}
        return jsonify(resp), 200 
   
    except Exception as e:
        return "error: " + str(e)

# Route pour modifier une tâche dans la BDD
@app.route('/EditTache', methods=['POST'])
def EditTache():
    try:
        # data from front
        name = str(request.json['name'])
        state = str(request.json['state'])
        id = str(request.json['id'])

        # Connection bdd
        conn = login_database()
        cursor = conn.cursor()

        requete_sql = "UPDATE tacheListes SET name='"+name+"', state='"+state+"' WHERE idUnique="+id+";"

        cursor.execute(requete_sql)
        conn.commit()    
        
        # Envoie le resultat au back en Json
        resp = {"success": True}
        return jsonify(resp), 200 
   
    except Exception as e:
        return "error: " + str(e)

if __name__ == '__main__':

    # Adresse ip pour lancer en local
    app.run(host='127.0.0.1', port=5001, debug=True)
