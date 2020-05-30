"use strict"//严格模式

/** 
 * 封装自己的工具库--利用具名函数
 * 
 * 获取ID的DOM元素，更有语义化
 * 
 * @param {string} id
 */
function $(id) {
    return document.getElementById(id);
}

/**
 * 创建元素
 */
function createEl(node) {
    return document.createElement(node);
}

/**
 * 设置节点属性
 * 
 * 第一种写法:
 *    function setAttr(node,style,value) {
 *        node.setAttribute(style,value);
 *     }
 * 
 *  const tableDom = createEl('table'); //先声明
 * 
 *  setAttr(tableDom,'width','100%'); //调用具名函数设置属性
 *  setAttr(tableDom,'border','0');
 *  setAttr(tableDom,'cellpadding','0');
 *  setAttr(tableDom,'cellspacing','0');
 *  setAttr(tableDom,'id','table-data-wrap');
 */

/**
 *  for...in 语句用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）
 *  for...in 循环中的代码每执行一次，就会对数组的元素或者对象的属性进行一次操作。
 * 
 *  语法：
 *    for(变量 in 对象) { 在此执行代码 }
 *    “变量”是用来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
 * 
 * 
 * 设置节点属性--不需要return
 *  
 * 第二种写法:json对象，for in 循环数组，一个个添加属性
 */
function setAttr(node, styles) {
    for (let key in styles) {
        // console.log(key); //键名
        // console.log(styles[key]); //健值
        node.setAttribute(key, styles[key]);
    }
}

/**
 * 获取节点属性值--获取、创建等需要return
 */
function getAttr(node, attr) {
    return node.getAttribute(attr);
}


//获取div
const divDom = $('container-wrap');

//固定语法
const tableDom = createEl('table');
//设置节点属性--第二种写法
const styles = {
    'border': '0',
    'width': '100%',
    'cellpadding': '0',
    'cellspacing': '0',
    'id': 'table-data-wrap'
}
setAttr(tableDom, styles);

let aa = getAttr(tableDom, 'id'); //获取属性值   
console.log(aa); //table-data-wrap

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


/**
 * 总结:
 * 
 * function函数
 * 
 * 匿名函数：自动执行、传参
 * 具名函数：有函数提升的概念
 * 函数表达式: 没有函数提升的概念，必须先定义后使用
 * 
 * 返回值: return
 * 
 * 封装我们的方法
 * 
 * 
 */