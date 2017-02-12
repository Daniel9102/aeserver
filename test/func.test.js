/**
 * Created by nico on 2017/2/12.
 */
var should = require("should");
var AE = require("../index")({mode:'DEV',scope:'api',appkey:'45883198abcdc107',masterKey:'1b7e5703602b6fce1cae7364ac0f2244'});
describe("Function",function(){
    it('call function',function(done){
        var func = new AE.Function("ec.weistore.test");
        func.invoke({123:123}).then(function(data){
            console.log(data);
            done()
        }).catch(function(err){
            done(err);
        })
    })
})