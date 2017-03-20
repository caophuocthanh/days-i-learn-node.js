// base-model.js
/*
* Object Entries
* @param: Object
*/
function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj)
    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]]
    }
}

var BaseModel = function (json = {}) {
    
    this.createdAt = new Date().getTime()

    // init object
    for (let [key, value] of objectEntries(json)) {
        this[key] = value
    }

    // Functions
    /*
    * gennerater json
    * @param: json
    */
    this.init = function (json) {
        for (let [key, value] of objectEntries(json)) {
            this[key] = value
        }
    }

    /*
    * Parse to json
    * return json
    */
    this.toJSON = function () {
        var json = {}
        var keys = Object.keys(this)
        var values = Object.values(this)
        keys.forEach(function (key, index) {
            var value = values[index]
            var type = typeof (value)
            if (type != "function" && type != "undefined" && value != null) {
                json[key] = value
            }
        })
        return json
    }
}

module.exports = BaseModel;