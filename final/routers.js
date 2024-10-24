import { Router } from 'express';

import { loginUsersModel } from './loginUsers.js';
import { sessionModel } from './session.js';
import { chatModel } from './chat.js';
import { userModel } from './users.js';
const router = Router();

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

    if (!userModel.isValid(username) || username === "") {
        res.status(400).json({ error: "invalid-username" });
        return;
    }
    if (username === "dog") {
        res.status(403).json({ error: "banned-user" });
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



export default router;
