/**
 * Created by nico on 2017/2/12.
 */
module.exports = (function (option) {
    var callApi = require("./http")(option);
    return {
        callFunc:function(funcName,args){
            return callApi.exec(funcName,args);
        }
    }
})