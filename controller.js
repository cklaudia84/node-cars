require('dotenv').config();
const express = require('express');
const model = require('./model');

exports.aboutUsPage = function(response)
{
    response.render('aboutus.ejs');
};
exports.carsPage = function(response)
{
    model.cars((result, error) =>
    {
        if(error)
            {
                response.status(500).send('Database query error: ' + error.sqlMessage);
            }
            else
            {
                response.render('cars.ejs', {cars: result});
            }
    });
};
exports.contactPage = function(response)
{
    response.render('contact.ejs');
}
exports.notFoundPage = function(response)
{
    response.status(404);
    response.render('not-found.ejs');
};
exports.initApp = function()
{
    model.init();
    var app = express();
    app.use(express.static('static'));
    app.set('view engine', 'ejs');
    app.listen(process.env.PORT || 8080);

    return app;
};