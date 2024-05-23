import mysql2 from "mysql2"

export const db = mysql2.createConnection(
    'mysql://u1:5Koliprodavam@localhost:3306/blogproject'
)