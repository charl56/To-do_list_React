# To-do list 

## Versions
```
Python 3.11.1
pip 22.3.1 
MariaDB 10.6.5
npm 9.1.2
yarn 1.22.19
```



## Clone repository
```
git clone https://github.com/charl56/To-do_list_React.git
cd To-do_List_React
```


# Database

### `Set user and password`
```
in \backend\log\
rename file .env.example to .env
set username and password value
```

### `Create database`
```
Importer les créations, donnnées.. manuellement.
Sinon pas possible de se connecter a la database apptaches si elle existe pas(backend/log.py)
Tester connection sans (database="apptaches") log.login_database()
```


# Backend
### `Create venv`
```
cd backend
python -m venv env
```
### `Activate venv, on :`
```
Unix bash shell: source /env/bin/activate
Unix fish shell: source /env/bin/activate.fish
Windows Command Prompt: \env\Scripts\activate.bat
Windows PowerShell: path\to\venv\Scripts\Activate.ps1
unix
```
### `Install dependencies`
```
pip install -r requirements.txt
```
### `Launch backend`
```
python app.py
```



# Frontend
### `Go to frontend directory`
```
cd ..
cd /frontend
```
### `Install dependencies`
```
yarn install
```

### `Launch frontend`
```
yarn start
```
#
### Open [http://localhost:3001](http://localhost:3001) to view it in your browser.
