///<reference path="../../typings/index.d.ts" />
function go(x) {
    switch (x) {
        case 1:
            window.location.href = "../index.html";
            break;
        case 2:
            window.location.href = "";
            break;
        case 3:
            window.location.href = "";
            break;
        case 4:
            window.location.href = "";
            break;
        case 5:
            window.location.href = "view/mine.html";
            break;
    }
}
function login() {
    window.location.href = "login.html";
}
function register() {
    window.location.href = "register.html";
}
function back() {
    history.back();
}
function select(index, obj) {
    switch (index) {
        case 1:
            $(obj).addClass('active').siblings().removeClass('active');
            break;
        case 2:
            $(obj).addClass('active').siblings().removeClass('active');
            break;
        case 3:
            $(obj).addClass('active').siblings().removeClass('active');
            break;
        case 4:
            $(obj).addClass('active').siblings().removeClass('active');
            break;
    }
}
