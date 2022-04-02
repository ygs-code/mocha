/*
 * @Date: 2022-04-02 14:30:45
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-04-02 14:32:18
 * @FilePath: /Mocha/test/add.test.js
 * @Description: 
 */
// add.test.js
var add = require('../tool/add');
// 断言库
var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});