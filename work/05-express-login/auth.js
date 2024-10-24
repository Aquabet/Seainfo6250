const { v4: uuidv4 } = require('uuid');

module.exports = function (sessions, userData) {
    return {
        login: function (req, res) {
            const { username } = req.body;
            if (!username || username === "dog" || !username.match(/^[a-z0-9]+$/i)) {
                return res.status(400).send('Invalid username. <a href="/">Try again</a>');
            }
            const sid = uuidv4();
            res.cookie('sid', sid, { httpOnly: true });
            sessions[sid] = { username };
            userData[username] = userData[username] || '';
            res.redirect('/');
        },

        logout: function (req, res) {
            const sid = req.cookies.sid;
            delete sessions[sid];
            res.clearCookie('sid');
            res.redirect('/');
        }
    };
};
