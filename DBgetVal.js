const sendQuery = require('./DBsendQuery');
module.exports = (table, columNameKnown, valueKnown, columnWillBeGot) => {
    return new Promise(resolve => {
        sendQuery(`select ${columnWillBeGot} from ${table} where ${columNameKnown} = ?;`,
        [valueKnown]
        ).then(result => {

            if (result.result == false){
                resolve(false);
            }
            result.result = JSON.stringify(result.result);
            result.result = JSON.parse(result.result);
            result.result = Object.values(result.result[0])[0];
            result.connection.end();
            resolve(result.result);
        });
    });

}