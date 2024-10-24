const express = require('express');

const loginUsersModel = require('./loginUsers');
const sessionModel = require('./session');
const chatModel = require('./chat');
const userModel = require('./users');
const router = express.Router();

router.get("/session", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessionModel.getUsername(sid) : '';
    if (!sid || !username) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }
    res.json({ username });
});

router.post("/session", (req, res) => {
    const { username } = req.body;

    if (!userModel.isValid(username)) {
        res.status(400).json({ error: "required-username" });
        return;
    }
    if (username === "dog") {
        res.status(403).json({ error: "auth-insufficient" });
        return;
    }
    const sid = sessionModel.setSession(username);
    userModel.registerUser(username);
    loginUsersModel.addLoginUsers(username);

    res.cookie("sid", sid);
    res.json(loginUsersModel.getLoginUsers());
});

router.delete("/session", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessionModel.getUsername(sid) : "";

    if (sid) {
        res.clearCookie("sid");
    }

    if (username) {
        sessionModel.deleteSession(sid);
        loginUsersModel.deleteLoginUsers(username);
    }

    res.json({ username });
});

router.get("/users", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessionModel.getUsername(sid) : '';
    if (!sid || !userModel.isValid(username)) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }
    res.json(loginUsersModel.getLoginUsers());
});

router.get("/messages", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessionModel.getUsername(sid) : '';
    if (!sid || !userModel.isValid(username)) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }

    res.json(chatModel.getMessages());
});



router.post("/messages", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessionModel.getUsername(sid) : '';
    if (!sid || !userModel.isValid(username)) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }

    const message = req.body.message.trim();
    if (!message) {
        res.status(400).json({ error: "required-message" })
        return
    }
    const record = {
        sender: username,
        text: message
    }

    chatModel.addMessage(record);
    res.json(chatModel.getMessages());
});



module.exports = router;
