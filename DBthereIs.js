const sendQuery = require('./DBsendQuery');
module.exports = (table, columName, value) => {
    return new Promise(resolve => {
        // console.log(`select count(*) from ${table} where ${columName} = ?;`, "from DBthereIs");
        sendQuery(`select count(*) from ${table} where ${columName} = ?;`,
        [value]
        ).then(result => {

            if (result.result == false){
                resolve(0);
            }
            result.result = JSON.stringify(result.result);
            result.result = JSON.parse(result.result);
            result.result = Object.values(result.result[0])[0];
            result.connection.end();
            resolve(parseInt(result.result));
        });
    });

}