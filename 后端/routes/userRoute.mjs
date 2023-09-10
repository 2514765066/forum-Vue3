import express from "express";
import db from "../sql.mjs";

const router = express.Router();

router.post("/register", (req, res) => {
	const sql1 = `select * from user where username="${req.body.username}"`;
	const sql2 = `insert into user value ("${req.body.username}","${req.body.password}") `;

	db.query(sql1, (e, result) => {
		if (e) throw e;

		if (result.length == 0) {
			db.query(sql2, e => {
				if (e) throw e;

				res.send(true);
			});
			return;
		}

		res.send(false);
	});
});

router.post("/login", (req, res) => {
	const sql = `select * from user where username="${req.body.username}" and password="${req.body.password}"`;

	db.query(sql, (e, result) => {
		if (e) throw e;

		if (result.length == 0) {
			res.send(false);
			return;
		}

		res.send(true);
	});
});

export default router;
