//const connection = require('./DBconnector');
const mysql   = require('mysql');
const Creadential = require('./DBcredential.json');

module.exports = (query) => {
    return new Promise(resolve => {
        const connection = mysql.createConnection(Creadential);
        connection.connect(function(err) {
            if (err) {
                console.error('Error connecting: ' + err);
                resolve({
                    result: false,
                    connection: connection
                });
            }
        
            console.log('Connected');
        
        return connection.query(query, function (error, results, fields) {
            if (error){
                resolve(false);
                throw error;
            }
            //connection.end();

            resolve({
                result: results,
                connection: connection
            });
        
        });
        });
    }) 
    
}