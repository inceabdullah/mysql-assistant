const sendQuery = require('./DBsendQuery');
module.exports = (table, columNameKnown, valueKnown, columnWillBeGot) => {
    return new Promise(resolve => {
        sendQuery(`select ${columnWillBeGot} from ${table} where ${columNameKnown} = ?;`,
        [valueKnown]
        ).then(result => {

            if (result.result == false){
                resolve(false);
            }
            if (result.result.length != 0){
                result.result = JSON.stringify(result.result);
                result.result = JSON.parse(result.result);
                result.result = Object.values(result.result[0])[0];             

            } else {
                result.result = false;
            }
            result.connection.end();
            resolve(result.result);

            
            
            
        });
    });

}