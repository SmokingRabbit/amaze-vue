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


export function removeAttr(el, attr) {
    el.removeAttribute(attr);
}

export function css() {
    const el = arguments[0];

    if (!arguments[2]) {
        for (let property in arguments[1]) {
            el.style[property] = arguments[1][property];
        }
    }
    else {
        el.style[arguments[1]] = arguments[2];
    }
}
