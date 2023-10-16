from flask import Flask
from flask import jsonify

from flask_cors import CORS

import sqlite3




app = Flask(__name__)

CORS(app)


def get_db_connection():
    conn = sqlite3.connect('stock.db')
    conn.row_factory = sqlite3.Row
    return conn

# Route to get data from the database
@app.route('/api/data', methods=['GET'])
def get_data():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM items')
    data = cursor.fetchall()
    conn.close()
    return jsonify({'data': [dict(row) for row in data]})

if __name__ == '__main__':
    app.run(debug=True)
