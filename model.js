const mysql = require('mysql');
const db = mysql.createConnection
({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'mysql',
    database: process.env.DB_NAME || 'node_cars',
    port: process.env.DB_PORT || 3306
});

exports.init = function(onReady)
{
    db.connect(error =>
    {
        if(error)
            {
                console.error('Hiba', error.sqlMessage);
            }
            else
            {
                if(onReady)
                    {
                        onReady();
                    }
            }
    });
};
exports.cars = function(onReady)
{
   var sql = "SELECT * FROM cars";
   db.query(sql, (e, result) =>
{
    if(e){console.log(e.sqlMessage);
        if(onReady)
            {
                onReady(null, e);
            }
    }
    else
    {
        if(onReady)
        {
            onReady(result);
        }
    } 
});
};
exports.close = function()
{
    db.end();
};