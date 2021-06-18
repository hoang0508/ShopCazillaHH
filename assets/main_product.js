function changeImage(id) {
    let imagePath = document.getElementById(id).getAttribute('src');
    document.getElementById('img-main').setAttribute('src', imagePath);
}

var countDate = new Date('June 30, 2021 00:00:00').getTime();

function newYear() {
    var now = new Date().getTime();
    gap = countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var dy = Math.floor(gap / (day));
    var h = Math.floor(gap % (day) / (hour));
    var m = Math.floor(gap % (hour) / (minute));
    var s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = dy;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function() {
    newYear();
}, 1000)

// 1 năm = 365 * 24 * 60 * 60 = 31536000
// 1 tháng = 31 * 24 * 60 * 60 = 2678400
// 1 tuần = 7 * 24 * 60 * 60 = 604800
// 1 ngày = 1 * 24 * 60 * 60 = 86400
// 1 giờ = 1 * 60 * 60 = 3600
// 1 phút = 1 * 60 = 60