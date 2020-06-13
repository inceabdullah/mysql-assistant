const sendQuery = require('./DBsendQuery');
module.exports = (table, columNames, values) => {
    return new Promise(resolve => {
        sendQuery(`insert into ${table} (${columNames.filter((columnName, columnNameIndex) => values[columnNameIndex] != null).join(", ")}) values(${Array(values.length).fill('?').join(', ')});`,
        values.filter(value => value != null)
        ).then(result => {


            if (result.result == false){
                resolve(0);
            }
            result.connection.end();
            resolve(parseInt(result.result.affectedRows));

            
            
            
        });
    });

}