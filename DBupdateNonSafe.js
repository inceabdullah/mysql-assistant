const sendQuery = require('./DBsendQuery');
module.exports = (table, columNameKnown, valueKnown, columnNameWillChangeValue, newValue) => {
    return new Promise(resolve => {
        sendQuery(`update ${table} set ${columnNameWillChangeValue} = ${newValue} where ${columNameKnown} = ?;`,
        [valueKnown]
        ).then(result => {


            if (result.result == false){
                resolve(0);
            }
            result.connection.end();
            resolve(parseInt(result.result.affectedRows));

            
            
            
        });
    });

}