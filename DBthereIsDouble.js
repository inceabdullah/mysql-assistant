const sendQuery = require('./DBsendQuery');
module.exports = (table, columNames, values) => {
    return new Promise(resolve => {
        sendQuery(`select count(*) from ${table} where ${columNames[0]} = '${values[0]}' and ${columNames[1]} = '${values[1]}';`).then(result => {

            if (result == false){
                resolve(0);
            }
            result = JSON.stringify(result);
            result = JSON.parse(result);
            result = Object.values(result[0])[0];
            resolve(result);
        });
    });

}