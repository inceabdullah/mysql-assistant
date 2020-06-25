const sendQuery = require('./DBsendQuery');
module.exports = (table, columNameKnown_or_s, valueKnown_or_s, column_sWillBeGot, QUERY_group_by) => {
    if (!Array.isArray(columNameKnown_or_s)){
        columNameKnown_or_s = [columNameKnown_or_s];
    }

    if (!Array.isArray(valueKnown_or_s)){
        valueKnown_or_s = [valueKnown_or_s];
    }

    return new Promise(resolve => {
        sendQuery(`select ${column_sWillBeGot.join(', ')} from ${table} where ${
            columNameKnown_or_s.map(columnNameItem => {
                return `${columnNameItem} = ${valueKnown_or_s[columNameKnown_or_s.indexOf(columnNameItem)]}`;
            }).join(" and ")
        }${QUERY_group_by ? (" group by " + QUERY_group_by) : ""};`,
        Array.isArray(valueKnown_or_s) ? valueKnown_or_s : [valueKnown_or_s]
        ).then(result => {

            if (result.result == false){
                resolve(false);
            }
            if (result.result.length != 0){
                result.result = JSON.stringify(result.result);
                result.result = JSON.parse(result.result);
                // console.log("result.result");
                // console.log(result.result);
                //result.result = Object.values(result.result[0])[0];        

            } else {
                result.result = false;
            }
            result.connection.end();
            resolve(result.result);

            
            
            
        });
    });

}