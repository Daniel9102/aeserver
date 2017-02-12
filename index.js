/**
 * Created by nico on 2017/2/12.
 */
var AE = {

};
var M = require('./model/common');
module.exports = function(option){
    option = option||{mode:'DEV',scope:'api',adapter:'mysql'};
    AE.M = M(option);
    require('./lib/function')(AE);
    return AE ;
}