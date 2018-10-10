import '../css/common.css';

var header = document.createElement('div');
header.innerHTML = `<div class="common-header">
    <a href="index.html">首页</a>
    <a href="diceExample.html">骰子的例子</a>
    <a href="listLayout.html">list的例子</a>
    <a href="grailExample.html">圣杯的例子</a>
</div>`;
document.body.insertBefore(header, document.body.firstElementChild);
