/**开启严格模式--例如:声明变量不加var/let/const,直接报错，没有严格模式，不会报错，会显示结果 */
"use strict"
// x = 12;
// console.log(x);

//固定语法
/**
 *  var _name = 18; //es5
 * 
 *  let 声明基础数据类型
 *  let name = 20;
 * 
 *  const 用于常量、引用类型、基础数据类型
 *  const arr = [11,2];
 */

/**
 * getElementById() 方法可返回对拥有指定ID的第一个对象的引用  获取元素
 */
const divDom = document.getElementById('table-data-wrap');//获取div
console.log(divDom);

/**
 * createElement() 方法通过指定名称创建一个元素
 * 
 * 语法:document.createElement(nodeName)   nodeName:String类型
 * 返回值：元素对象--Document对象    描述:创建的元素节点
 */
const tableDom = document.createElement('table'); //创建DOM元素-DOM对象--引用类型-->const  结果:<table></table>

/**
 * setAttribute() 方法添加指定的属性，并为其赋指定的值。若指定的属性已存在，则更改值
 * 
 * 语法:element.setAttribute(attributename,attributevalue) 参数为string类型
 */
tableDom.width = '100%'; //设置属性--第一种写法.
tableDom.setAttribute('border', '0'); //设置属性--第二种写法

/**
 * cellpadding:属性规定单元边沿与其内容之间的空白
 * cellspacing:属性规定单元格之间的空间
 */
tableDom.setAttribute('cellpadding', '0');
tableDom.setAttribute('cellspacing', '0');
tableDom.setAttribute('id', 'table-data-wrap');

/**
 * getAttribute() 方法返回指定属性名的属性值
 */
let aa = tableDom.getAttribute('id'); //获取属性值   table-data-wrap
console.log(aa);

/**
 * innerHTML属性设置或返回表格行的开始和结束标签之间的HTML
 * 
 * 语法:tablerowObject.innerHTML = HTML (可以是字符串、可以是HTML标签)
 */
// tableDom.innerHTML = '<thead><tr><th>asdas</th></tr></thead>'  //es5 单双引号 不可换行，换行则需要拼接字符串
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
                      </thead>`; //es6 `` 支持换行

/**
 * appendChild() 方法可向节点的子节点列表的末尾添加新的子节点
 * 
 * 语法: node.appendChild(node)  参数:node 节点对象  你要添加的节点   返回值: 节点对象  即添加的节点
 */
divDom.appendChild(tableDom);