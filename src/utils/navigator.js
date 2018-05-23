export function detectMobile() {
    const ua = navigator.userAgent;
    
    if (
        ua.match(/Android/i) ||
        ua.match(/webOS/i) ||
        ua.match(/iPhone/i) ||
        ua.match(/iPad/i) ||
        ua.match(/iPod/i) ||
        ua.match(/BlackBerry/i) ||
        ua.match(/Windows Phone/i)
    ) {
        return true;
    }
    else {
        return false;
    }
}
