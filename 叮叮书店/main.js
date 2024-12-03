var datetime = new Date();// 获取当前日期和时间
var date = '';
var weekday = "";
var week = datetime.getDay();
switch (week) {
    case 0:
        weekday = "星期日"; break;
    case 1:
        weekday = "星期一"; break;
    case 2:
        weekday = "星期二"; break;
    case 3:
        weekday = "星期三"; break;
    case 4:
        weekday = "星期四"; break;
    case 5:
        weekday = "星期五"; break;
    case 6:
        weekday = "星期六"; break;
}
date = `${datetime.getFullYear()}年${parseInt(datetime.getMonth()) + 1}月${datetime.getDate()}日${weekday}`;
// 将日期格式化为字符串，如“2024年11月26日星期二”
var timerID = window.setInterval("showtime()", 1000);
// 每秒钟调用一次
function showtime() {
    let datetime = new Date();
    let time = "";
    time += datetime.getHours() < 10 ? `0${datetime.getHours()}:` : `${datetime.getHours()}:`;
    time += datetime.getMinutes() < 10 ? `0${datetime.getMinutes()}:` : `${datetime.getMinutes()}:`;
    time += datetime.getSeconds() < 10 ? `0${datetime.getSeconds()}` : `${datetime.getSeconds()}`;
    // 将时间格式化为字符串
    document.getElementById("date-time").innerHTML = `${date} ${time}`;
    // 更新页面上的元素，显示当前日期和时间
}
var count = 2; // 初始化计数器，表示当前显示的图片序号
var a = [...document.querySelectorAll('#banner a')]; // 获取所有 #banner a 元素，并转换成数组
var carouselID = window.setInterval("carousel()", 2000); // 设置定时器，每隔 2 秒调用一次 carousel() 函数

// 为每个 <a> 元素添加点击事件监听器
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function () {
        count = i + 1; // 更新计数器，表示当前点击的图片序号
        changebgcolor(count); // 调用 changebgcolor 函数改变背景颜色
    }, false);
}

// 轮播函数，用于自动切换图片
function carousel() {
    let imgSrc = `../叮叮书店/叮叮书店素材/图片素材/b-ad${count}.jpg`; // 根据当前序号生成图片路径
    let aChange = `a${count}`; // 获取当前序号对应的 <a> 标签的 id
    let aCount = count - 1; // 记录前一个 <a> 标签的序号
    if (aCount == 0) { aCount = 5; } // 如果序号为 0，则设置为 5，以防止越界
    let aRestore = `a${aCount}`; // 获取前一个 <a> 标签的 id

    document.getElementById("b-ad").src = imgSrc; // 更改图片的 src 属性
    document.getElementById(aChange).style.backgroundColor = "hsl(150, 40%, 30%)"; // 设置当前 <a> 标签的背景颜色
    document.getElementById(aRestore).style.backgroundColor = "hsl(85, 55%, 50%)"; // 恢复前一个 <a> 标签的背景颜色

    count = count + 1; // 增加计数器
    if (count == 6) { count = 1; } // 如果计数器超过 5，重置为 1
}

// 改变背景颜色函数，用于手动切换图片
function changebgcolor(num) {
    document.getElementById("b-ad").src = `../叮叮书店/叮叮书店素材/图片素材/b-ad${num}.jpg`; // 根据 num 参数生成图片路径
    for (let targetNum = 1; targetNum <= 5; targetNum++) { // 遍历所有 <a> 标签
        let aTarget = `a${targetNum}`; 
        if (targetNum == num) {
            document.getElementById(aTarget).style.backgroundColor = "hsl(150, 40%, 30%)"; // 设置当前 <a> 标签的背景颜色
        } else {
            document.getElementById(aTarget).style.backgroundColor = "hsl(85, 55%, 50%)"; // 恢复其他 <a> 标签的背景颜色
        }
    }
}
