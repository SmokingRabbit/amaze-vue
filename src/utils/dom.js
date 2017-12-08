export function on(el, event, func) {
    el.addEventListener(event, func, false);
}

export function off(el, event, func) {
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

    if (typeof newClass === 'string') {
        classes.push(newClass);
    }
    else {
        newClass.forEach((_class) => {
            classes.push(_class);
        });
    }

    attr(el, {
        'class': classes.join(' ')
    });
}

export function removeClass(el, remClass) {
    let classes = attr(el, 'class');

    if (!classes) {
        classes = [];
    }
    else {
        classes = classes.split(' ');
    }

    function _remove(_class) {
        let index = classes.indexOf(_class);

        if (index > -1) {
            classes.splice(index, 1);
        }
    }

    if (typeof remClass === 'string') {
        _remove(remClass);
    }
    else {
        remClass.forEach((_class) => {
            _remove(_class);
        });
    }

    attr(el, {
        'class': classes.join(' ')
    });
}
