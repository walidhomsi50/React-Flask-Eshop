from flask import Flask
from flask import jsonify
import base64
from flask_cors import CORS

import sqlite3




app = Flask(__name__)

CORS(app)


def get_db_connection():
    conn = sqlite3.connect('stock.db')
    conn.row_factory = sqlite3.Row
    return conn

import base64

import base64

@app.route('/api/data', methods=['GET'])
def get_data():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM products')
    rows = cursor.fetchall()
    conn.close()

    # Convert rows to dictionaries and encode image data to Base64
    data = []
    for row in rows:
        item_dict = dict(row)
        # Check if the 'image' field exists and is not None
        if 'photo' in item_dict and item_dict['photo']:
            item_dict['photo'] = base64.b64encode(item_dict['photo']).decode('utf-8')
        data.append(item_dict)

    return jsonify({'data': data})




if __name__ == '__main__':
    app.run(debug=True)
