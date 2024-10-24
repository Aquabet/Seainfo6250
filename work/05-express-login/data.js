module.exports = function (userData) {
    return {
        updateStoredWord: function (req, res) {
            if (!req.user) {
                return res.status(403).send('Not logged in.');
            }
            const { word } = req.body;
            userData[req.user] = word;
            res.redirect('/');
        }
    };
};
