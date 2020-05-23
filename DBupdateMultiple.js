const sendQuery = require('./DBsendQuery');
module.exports = (table, columName_sKnown, value_sKnown, columnName_sWillChangeValue, newValues) => {
    return new Promise(resolve => {
        sendQuery(`update ${table} set ${columnName_sWillChangeValue.map(x => x + ' = ?').join(', ')} where ${columName_sKnown.map(x => x + ' = ?').join(' and ')};`,
        newValues.concat(value_sKnown)
        ).then(result => {


            if (result.result == false){
                resolve(0);
            }
            result.connection.end();
            resolve(parseInt(result.result.affectedRows));

            
            
            
        });
    });

}