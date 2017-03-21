
var mysql = require("mysql")
var BaseModel = require("./base-model.js")

var UserModel = function () {

    // objectType
    this.objectType = "user"

    // Properties
    this.createdAt = new Date().getTime()

    // Functions

    this.add = function(connection, callback){
        if (this.id == null && this.id == undefined) {
            callback(false, "null id")
            return
        } else if (this.createdAt == nul && this.createdAt == undefined) {
            callback(false, "null id")
            return
        }
        //TODO: run SQL add user in database and callback
        callback(true, null)
    }

    this.delete = function(connection, callback) {
        if (this.id != null && this.id != undefined) {
            callback(true, null)
            return
        }
        //TODO: run SQL delete user in database and callback
        callback(false, "Delete null id")
    }

    this.all = function(connection, callback) {
        var query = "SELECT * FROM ??";
        var table = ["acount"];
        query = mysql.format(query, table);
        connection.query(query,function(err,rows){
            if(err) {
                callback(null);
            } else {
                callback(rows);
            }
        });
    }
}

UserModel.prototype = new BaseModel()

module.exports = UserModel