var mysql = require("mysql")

var Database = function () {
    this.connection = function(handle) {
        var pool = mysql.createPool({
            connectionLimit: 100,
            host: 'localhost',
            user: 'root',
            password: 'caophuocthanh',
            database: 'caophuocthanh',
            debug: false
        })
        pool.getConnection(function(error, connection) {
            this._connection = connection
            handle(error, connection)
        })
    }
}

module.exports =  Database