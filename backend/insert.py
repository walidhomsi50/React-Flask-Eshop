import sqlite3 

conn= sqlite3.connect('stock.db')

c=conn.cursor()

#c.execute("""CREATE TABLE items (
#item_id integer PRIMARY KEY,
#name text NOT NULL,
#color text NOT NULL,
#size text NOT NULL UNIQUE,
#price integer NOT NULL,
 #quanitiy integer 
#)""")
c.execute(" INSERT INTO items values ('0006','jeans','blue','28','75$','6')")
c.execute(" INSERT INTO items values ('0005','t-shirt','red','XXS','75$','6')")
c.execute(" INSERT INTO items values ('0002','jeans','blue','40','75$','6')")
c.execute(" INSERT INTO items values ('0009','t-shirt','red','XXL','75$','6')")
c.execute(" INSERT INTO items values ('0010','jeans','blue','38','75$','6')")
c.execute(" INSERT INTO items values ('11','t-shirt','red','XS','75$','6')")
c.execute(" INSERT INTO items values ('12','jeans','blue','36','75$','6')")
c.execute(" INSERT INTO items values ('13','t-shirt','red','XL','75$','6')")
c.execute(" INSERT INTO items values ('14','jeans','blue','30','75$','6')")
c.execute(" INSERT INTO items values ('15','t-shirt','red','S','75$','6')")


c.execute("SELECT * FROM items")

print(c.fetchall())
conn.commit()

conn.close()