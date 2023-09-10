import mysql from "mysql";

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "sa123",
	database: "forum",
});

connection.connect();
// export const select = "select * from";

// export const insert = "insert into user value (?,?,?)";

export default connection;
