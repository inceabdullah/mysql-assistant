const mysqlAssitant = require("./");

mysqlAssitant.getColumns("table", ["know_column_name"], ["known_value"], ["column_name_value_is_wanted"]).then(res=> console.log({res}));
mysqlAssitant.getColumnsNonSafe("table", ["know_column_name"], ["known_value"], ["column_name_value_is_wanted"]).then(res=> console.log({res}));
mysqlAssitant.getVal("table", "know_column_name", "known_value", "column_name_value_is_wanted").then(res=> console.log({res}));
mysqlAssitant.insert("table", ["column_name_wanted_to_be_inserted"], ["value_wanted_to_be_inserted"]).then(res=> console.log({res}));
mysqlAssitant.insertWithPK("table", ["column_name_wanted_to_be_inserted"], ["value_wanted_to_be_inserted"]).then(res=> console.log({res}));
mysqlAssitant.sendQuery("select * from table where ID > ?;", [0]).then(res=> console.log({res}));
mysqlAssitant.thereIs("table", "known_column_name", "known_value").then(res=> console.log({res}));
mysqlAssitant.thereIsDouble("table", ["known_column_name", "other"], ["known_value", "other"]).then(res=> console.log({res}));
mysqlAssitant.update("table", "known_column_name", "known_value", "column_name_will_changed", "new_value").then(res=> console.log({res}));
mysqlAssitant.updateMultiple("table", ["known_column_name"], ["known_value"], ["column_name_will_changed"], ["new_value"]).then(res=> console.log({res}));
mysqlAssitant.updateNonSafe("table", "known_column_name", "known_value", "column_name_will_changed", "new_value").then(res=> console.log({res}));
