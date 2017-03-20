
var BaseModel = require("./base-model.js")

var UserModel = function () {

    // objectType
    this.objectType = "user"

    // Properties
    this.createdAt = new Date().getTime()

    // Functions

    this.add = function(callback){
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

    this.delete = function(callback) {
        if (this.id != null && this.id != undefined) {
            callback(true, null)
            return
        }
        //TODO: run SQL delete user in database and callback
        callback(false, "Delete null id")
    }
}

UserModel.prototype = new BaseModel()

module.exports = UserModel