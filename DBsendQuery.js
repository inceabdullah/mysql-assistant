const connection = require('./DBconnector');
module.exports = (query) => {
    return new Promise(resolve => {
        connection.connect(function(err) {
            if (err) {
                console.error('Error connecting: ' + err);
                resolve(false);
            }
        
            console.log('Connected');
        
        return connection.query(query, function (error, results, fields) {
            if (error){
                resolve(false);
                throw error;
            }
            connection.end();

            resolve(results);
        
        });
        });
    }) 
    
}