var supertest = require("supertest");
var should = require("should");
var chai = require('chai');

// This agent refers to PORT where the program is running.
var server = supertest.agent("http://localhost:3000");
var expect = chai.expect;

// UNIT test begin
describe("SAMPLE unit test",function(){
  let user_id;
  let demo_user_id =1 ;

  // #1 should return home page
  it("should return 'hello world'",function(done){
    // calling home page
    server
    .get("/")
    .end(function(err,res){
      console.log(res.text);
      expect(res.text).to.equal('hello world')
      done();
    });
  });  
});