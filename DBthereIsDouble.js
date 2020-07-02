const sendQuery = require('./DBsendQuery');
module.exports = (table, columNames, values, columNames4Like) => {
    if (!Array.isArray(columNames4Like)){
        columNames4Like = [columNames4Like];
    }
    return new Promise(resolve => {
        // console.log(`select count(*) from ${table} where ${columNames[0]} = ? and ${columNames[1]} = ?;`, "from DBthereIsDouble");
        // console.log("table, columNames, values, columNames4Like:", table, columNames, values, columNames4Like);
        // console.log("after where:", columNames.map(
        //     x => x + 
        //     ( columNames4Like.includes(x) ? ' like ' : ' = ' ) + '?' ));
        sendQuery(`select count(*) from ${table} where ${columNames.map(
            x => x + 
            ( columNames4Like.includes(x) ? ' like ' : ' = ' ) + '?' ).join(' and ')
        };`,
        values.map(
            ( value, valueIndex ) => ( 
                columNames4Like.includes( columNames[valueIndex] ) ? `%${value}%` : value
            )
        )
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