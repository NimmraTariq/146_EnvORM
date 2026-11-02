const express = require('express');
const app = express();
const port = 3000;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.sequelize.sync()
.then((result) => {
    app.listen(port, () => {
        console.log(`Server started on http://localhost:${port}`);
    });
})
.catch((err) => {
    console.log(err);
});
