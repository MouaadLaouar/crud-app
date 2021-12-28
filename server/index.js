const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const users = require('./models/user');

const PORT = process.env.PORT;
const DB = process.env.DB;

app.use(express.json());
app.use(cors());


mongoose.connect(DB).then((result) => {
    app.listen(PORT, () => {
        console.log('connect to the data base');
        console.log('listen to the Port '+ PORT);
    });
});

app.post('/adduser', async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = req.body.age;
    const email = req.body.email;
    const password = req.body.password;

    const user = new users({
        firstname: firstname,
        lastname: lastname,
        age: age,
        email: email,
        password: password
    });

    await user.save();
    res.send("succes");
});

app.get('/read', async(rea, res) => {
    users.find({}, (err, result) => {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
});

app.delete('/delete/:id', async(req, res) => {
    const id = req.params.id;
    await users.findByIdAndRemove(id).exec();
    res.send('DONE !')
})

app.get('/', (req, res) => {
    res.send("hello laouar med mouaad")
})




