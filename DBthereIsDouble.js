const sendQuery = require('./DBsendQuery');
module.exports = (table, columNames, values) => {
    return new Promise(resolve => {
        sendQuery(`select count(*) from ${table} where ${columNames[0]} = '${values[0]}' and ${columNames[1]} = '${values[1]}';`).then(result => {

            if (result.result == false){
                resolve(0);
            }
            result.result = JSON.stringify(result.result);
            result.result = JSON.parse(result.result);
            result.result = Object.values(result.result[0])[0];
            result.connection.end();
            resolve(result.result);
        });
    });

}