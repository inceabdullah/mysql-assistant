const connection = require('./DBconnector'); // pool
// const mysql   = require('mysql');
// console.log("connection fromDBsendQuery:", connection);
// const Creadential = require('./DBcredential.json');

module.exports = (query, queryPlaceHolders) => {
    return new Promise(resolve => {
        // const connection = mysql.createConnection(Creadential);
/*         connection.getConnection(function(err, connection) {
            if (err) {
                console.error('Error connecting: ' + err);
                const fakeConnection = {end: () => {return connection.release();} }
                resolve({
                    result: false,
                    connection: fakeConnection
                });
            }
        
            // console.log('Connected');
        // console.log("query:", query);
        return connection.query(query, queryPlaceHolders, function (error, results, fields) {
            if (error){
                resolve(false);
                throw error;
            }
            //connection.end();
            // console.log("results:", results);
            const fakeConnection = {end: () => {return connection.release();} }
            resolve({
                result: results,
                connection: fakeConnection
            });
        
        });
        }); */


        connection.query(query, queryPlaceHolders, function (error, results, fields) {
            console.log(query);
            if (error){
                resolve(false);
                throw error;
            }
            //connection.end();
            // console.log("results:", results);
            const fakeConnection = {end: () => {return;} }
            resolve({
                result: results,
                connection: fakeConnection // connection
            });
        
        });



    }) 
    
}