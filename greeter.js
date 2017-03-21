var UserModel = require("./user-model.js")
var Database = require("./database.js"),
    database = new Database()

var user = new UserModel()
//user.init({id: 100, name: 'thanh', birth: '22/0/000', createdBy: "10000" })

console.log("TO JSON:", database)


database.connection(function (error, connection) {
    user.all(connection, function (result, message) {
        console.log("all user: " + result + " - message: ", message)
        connection.release()
        return
    })
})

console.log("END")

