// FileName as index.js or change in the root/package.json file
const express = require('express');
const cors = require('cors');
const ai_chat_app = express();
const PORT = 5001;

ai_chat_app.use(cors());
ai_chat_app.use(express.json());

// dummy data

let dummy_users = [{
        "id": 1,
        "name": "Arun Harshan",
        "email": "arun@test.com",
        "password":"test",
    },
    {
        "id": 2,
        "name": "John Doe",
        "email": "john@test.com",
        "password":"test",
    }
];

ai_chat_app.get('/users', (req, resp) => {
    resp.json(dummy_users)
});

ai_chat_app.post('/user', (req, resp) => {
    const new_user = { id: Date.now(), ...req.body };
    dummy_users.push(new_user);
    resp.status(200).json(new_user);
});

ai_chat_app.delete('/user/:id', (req, resp) => {
    const id = parseInt(req.params.id);
    dummy_users = dummy_users.filter((val, i, arr) => {
        return val.id !== id
    });
    resp.status(200).json({ message: 'user deleted' })
});

ai_chat_app.get('/user/:id', (req, resp) => {
    const id = parseInt(req.params.id);
    const single_user = dummy_users.find(user => user.id === id);
    single_user ? resp.status(200).json(single_user) : resp.status(404).json({ message: 'User not found' });

});

ai_chat_app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const foundUser = dummy_users.find(user => user.email === email && user.password === password);
    if (foundUser) {
        res.status(200).json({
            message: 'Login successful',
            user: {
                id: foundUser.id,
                name: foundUser.name,
                email: foundUser.email
            }
        });
    } else {
        res.status(401).json({ error: 'Invalid email or password' });
    }
});

// starts server
ai_chat_app.listen(PORT, () => {
    console.log(`AI Chat APP express server runs at the port, http://localhost:${PORT}`);

})