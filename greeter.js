var UserModel = require("./user-model.js")

var user = new UserModel()
//user.init({id: 100, name: 'thanh', birth: '22/0/000', createdBy: "10000" })

console.log("TO JSON:", user.toJSON())

user.add(function(result, message) {
    console.log("add user: " + result + " - message: ", message)
})

user.delete(function(result, message) {
    console.log("delete user: " + result + " - message: ", message)
})