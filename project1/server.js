const express = require('express');
const cookieParser = require('cookie-parser');
const { sessions } = require('./userState');
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

app.use((req, res, next) => {
    const sid = req.cookies.sid;
    if (sid && sessions[sid]) {
        req.user = sessions[sid];
    }
    next();
});

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
