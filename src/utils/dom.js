function eleCheck(el) {
    if (!(el instanceof HTMLElement)) {
        console.error('arg[0] is not a HTMLElement');
    }
}

export function on(el, event, func) {
    eleCheck(el);
    el.addEventListener(event, func, false);
}

export function off(el, event, func) {
    eleCheck(el);
    el.removeEventListener(event, func);
}
