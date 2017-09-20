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

export function attr(el, arg) {
    if (typeof arg === 'object') {
        for (let property in arg) {
            el.setAttribute(property, arg[property]);
        }
    }
    else {
        return el.getAttribute(arg);
    }
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

export function addClass(el, newClass) {
    let classes = attr(el, 'class');

    if (!classes) {
        classes = [];
    }
    else {
        classes = classes.split(' ');
    }

    classes.push(newClass);

    attr(el, {
        'class': classes.join(' ')
    });
}
