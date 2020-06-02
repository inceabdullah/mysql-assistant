const sendQuery = require('./DBsendQuery');
module.exports = (table, columNameKnown, valueKnown, column_sWillBeGot, QUERY_group_by) => {
    return new Promise(resolve => {
        sendQuery(`select ${column_sWillBeGot.join(', ')} from ${table} where \`${columNameKnown}\` = ?${QUERY_group_by ? (" group by " + QUERY_group_by) : ""};`,
        [valueKnown]
        ).then(result => {

            if (result.result == false){
                resolve(false);
            }
            if (result.result.length != 0){
                result.result = JSON.stringify(result.result);
                result.result = JSON.parse(result.result);
                console.log("result.result");
                console.log(result.result);
                //result.result = Object.values(result.result[0])[0];        

            } else {
                result.result = false;
            }
            result.connection.end();
            resolve(result.result);

            
            
            
        });
    });

}