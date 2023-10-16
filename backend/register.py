import sqlite3

def convertToBinaryData(filename):
    # Convert digital data to binary format
    with open(filename, 'rb') as file:
        blobData = file.read()
    return blobData

def insertBLOB(productId,name,size,price,quantity,photo):
    try:
        sqliteConnection = sqlite3.connect('stock.db')
        cursor = sqliteConnection.cursor()
        print("Connected to SQLite")
        sqlite_insert_blob_query = """ INSERT INTO users
                                  (productId,name,size,price,quantity,photo) VALUES (?, ?, ?, ?,?,?)"""

        productPhoto = convertToBinaryData(photo)
        
        # Convert data into tuple format
        data_tuple = (productId,name,size,price,quantity,productPhoto)
        cursor.execute(sqlite_insert_blob_query, data_tuple)
        sqliteConnection.commit()
        print("Image and file inserted successfully as a BLOB into a table")
        cursor.close()

    except sqlite3.Error as error:
        print("Failed to insert blob data into sqlite table", error)
    finally:
        if sqliteConnection:
            sqliteConnection.close()
            print("the sqlite connection is closed")

insertBLOB(1, "jeans","32","75$","8","C:\\Users\\lgb\\Documents\\Projects\\walid\\retail stock with backend\images\\jeans.jpg")


@app.route('/register/', methods=('GET', 'POST'))
def register():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        phone = request.form['phone']
        if not username:
            flash('Usename is required!')
        elif not email:
            flash('Email is required!')
        elif not phone:
            flash('Phone is required!')
        else:
            conn = get_db_connection()
            conn.execute ('INSERT INTO posts (username, email, phone) VALUES (?, ?, ?)',
                          (username, email, phone))
            conn.commit()
            conn.close()
            return redirect(url_for('index'))
    return render_template('register.html')
