const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM Enjeu_1", (err, users) => {
      if (err) {
        res.json(err);
      }
      res.render("users", {
        data: users,
      });
    });
  });
};


module.exports = controller;