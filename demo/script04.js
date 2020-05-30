"use strict"
//函数表达式，先定义后调用，这样不会报错，因为函数表达式没有函数提升的概念
const $ = function (id) {
    return document.getElementById(id);
}

const divDom = $('table-data-wrap');//获取div--调用$()方法
console.log(divDom);
/**
 * 封装自己的工具库 必备技能
 * 
 * 声明具名函数 $也属于名称
 * 
 * 相比与const声明的函数表达式，这里不会报错，因为存在自动函数提升(函数提升的概念),
 *     无论这个函数放在哪个位置，程序执行时，它都会自动提升到最顶部--"use strict"的下一行(第二行)
 *         当程序继续向下跑的时候，都可以拿到这个$方法。
 * 
 * 若要使用函数表达式，则需先定义后调用，而不能先调用后定义，因为函数表达式没有函数提升的概念
 * 
 */
// function $(id) {
//    return document.getElementById(id);
//    //其中一点，谁调用了方法，值就返回给谁。这里不包含闭包概念
// }

//声明函数表达式 -->放在这里会报错，这里先使用后定义，正确是必须先定义再使用，因为函数表达式没有函数提升的概念
// const $ = function(id) {
//    return document.getElementById(id);
// }

/**
 * 1.自动执行函数--程序启动，先自动执行该函数，再去执行其他--依靠(function(){})() 第二个括号
 * 
 * (function() {
 *   alert(11111);
 * })()
 * 
 * 2.自动执行函数可传参
 * 
 *  (function(str,test){
 *    alert(str);
 *    alert(test);
 *  })('aaaa',2222);
 * 
 */


const tableDom = document.createElement('table');

tableDom.width = '100%'; //设置属性--第一种写法
tableDom.setAttribute('border', '0'); //设置属性--第二种写法
tableDom.setAttribute('cellpadding', '0');
tableDom.setAttribute('cellspacing', '0');
tableDom.setAttribute('id', 'table-data-wrap');

let aa = tableDom.getAttribute('id'); //获取属性值   table-data-wrap

tableDom.innerHTML = `<thead>
                          <tr>
                             <th>头像</th>
                             <th>姓名</th>
                             <th>性别</th>
                             <th>年龄</th>
                             <th>手机号</th>
                             <th>国籍</th>
                             <th width="200">爱好</th>
                             <th>头衔</th>
                             <th>操作</th>
                          </tr>
                      </thead>`;

divDom.appendChild(tableDom);