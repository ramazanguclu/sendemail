const passport = require('passport');

module.exports = (app) => {
    //login
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //login callback
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    //logout
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    //user
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}