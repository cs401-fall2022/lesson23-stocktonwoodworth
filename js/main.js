const sqlite3 = require('sqlite3').verbose();

/**
 * TODO do something
 */
function newEntry() {
    var db = new sqlite3.Database('mydb.sqlite3', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    )
}
