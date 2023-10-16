import sqlite3 

conn= sqlite3.connect('stock.db')

c=conn.cursor()

#def convertToBinaryData(filename):
    # Convert digital data to binary format
  # with open(filename, 'rb') as file:
  #     blobData = file.read()
  # return blobData
#def insertBLOB(item_id, name,color,size,price,photo1):
  #  try:
      #  sqliteConnection = sqlite3.connect('stock.db')
      #  cursor = sqliteConnection.cursor()
       # print("Connected to SQLite")
       # sqlite_insert_blob_query = """ INSERT INTO items
        #                         (item_id,name,color,size,price,photo1) VALUES (?,?,?,?,?,?)"""

       # itemPhoto = convertToBinaryData(photo1)
       
       # # Convert data into tuple format
       # data_tuple = (item_id,name,color,size,price,itemPhoto)
       # cursor.execute(sqlite_insert_blob_query, data_tuple)
       # sqliteConnection.commit()
        #print("Image and file inserted successfully as a BLOB into a table")
       # cursor.close()

    #except sqlite3.Error as error:
       # print("Failed to insert blob data into sqlite table", error)
    #finally:
       # if sqliteConnection:
          #  sqliteConnection.close()
           # print("the sqlite connection is closed")
#c.execute("ALTER TABLE items ADD COLUMN photo1 BLOB ")

#insertBLOB(35, "jean", "blue", "10" ,"100$", "C:\\Users\walid\Documents\\flask\React-with-Flask\images\\jeans.jpg")
#insertBLOB(36, "jeans","blue","9" , "100$", "C:\\Users\walid\Documents\\flask\React-with-Flask\images\\jeans.jpg")



c.execute("SELECT * FROM items")

#print(c.fetchall())
conn.commit()

conn.close()