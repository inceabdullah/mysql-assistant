const sendQuery = require('./DBsendQuery');
module.exports = (table, columNames, values) => {
    return new Promise(resolve => {
        // console.log(`select count(*) from ${table} where ${columNames[0]} = ? and ${columNames[1]} = ?;`, "from DBthereIsDouble");
        sendQuery(`select count(*) from ${table} where ${columNames[0]} = ? and ${columNames[1]} = ?;`,
        [values[0], values[1]]
        ).then(result => {
            // console.log("query:");
            // console.log(`select count(*) from ${table} where ${columNames[0]} = ? and ${columNames[1]} = ?;`);
            // console.log([values[0], values[1]]);

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