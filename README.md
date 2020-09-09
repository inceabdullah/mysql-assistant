## mysql-assistant

### Get Column
```Javascript
mysqlAssitant.getColumns("table", ["know_column_name"], ["known_value"], ["column_name_value_is_wanted"]).then(res=> console.log({res}));

mysqlAssitant.getColumnsNonSafe("table", ["know_column_name"], ["known_value"], ["column_name_value_is_wanted"]).then(res=> console.log({res}));
```

### Get Value
```Javascript
mysqlAssitant.getVal("table", "know_column_name", "known_value", "column_name_value_is_wanted").then(res=> console.log({res}));
```



### Inserting
```Javascript
mysqlAssitant.insert("table", ["column_name_wanted_to_be_inserted"], ["value_wanted_to_be_inserted"]).then(res=> console.log({res}));
```



### Inserting Row Then Getting PK
```Javascript
mysqlAssitant.insertWithPK("table", ["column_name_wanted_to_be_inserted"], ["value_wanted_to_be_inserted"]).then(res=> console.log({res}));
```


### Sending MySQL Query
```Javascript
mysqlAssitant.sendQuery("select * from table where ID > ?;", [0]).then(res=> console.log({res}));
```


### If There is a row
```Javascript
mysqlAssitant.thereIs("table", "known_column_name", "known_value").then(res=> console.log({res}));

mysqlAssitant.thereIsDouble("table", ["known_column_name", "other"], ["known_value", "other"]).then(res=> console.log({res}));
```

### Updating Row
```Javascript
mysqlAssitant.update("table", "known_column_name", "known_value", "column_name_will_changed", "new_value").then(res=> console.log({res}));

mysqlAssitant.updateMultiple("table", ["known_column_name"], ["known_value"], ["column_name_will_changed"], ["new_value"]).then(res=> console.log({res}));

mysqlAssitant.updateNonSafe("table", "known_column_name", "known_value", "column_name_will_changed", "new_value").then(res=> console.log({res}));
```


Note: Check [test.js](./test.js) for examples.

NonSafe node has not the `\`` symbols around value followed by **where**.

`DBcredential.json` file looks like:

```Javascript
{

    "host" : "127.0.0.1",
    "user" : "admin",
    "database" : "database",
    "password": "passwd"

}
```