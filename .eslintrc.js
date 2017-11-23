module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    extends: 'standard',  // 继承eslint-config-standard里面提供的lint规则
    plugins: [    // 使用的插件eslint-plugin-html. 写配置文件的时候，可以省略eslint-plugin-
        'html'
    ],
    // 以当前目录为根目录，不再向上查找 .eslintrc.js
    root: true,
    rules: {
        // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
        'for-direction': 'error',
        // getter 必须有返回值，并且禁止返回空，比如 return;
        'getter-return': [
            'error',
            {
                allowImplicit: false
            }
        ],
        // 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
        // @off 要求太严格了，有时需要在循环中写 await
        'no-await-in-loop': 'off',
        // 禁止与负零进行比较
        'no-compare-neg-zero': 'error',
        // 禁止在 if, for, while 里使用赋值语句，除非这个赋值语句被括号包起来了
        'no-cond-assign': [
            'error',
            'except-parens'
        ],
        // 禁止使用 console
        // @off console 的使用很常见
        'no-console': 'off',
        // 禁止将常量作为 if, for, while 里的测试条件，比如 if (true), for (;;)，除非循环内部有 break 语句
        'no-constant-condition': [
            'error',
            {
                checkLoops: false
            }
        ],
        // 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
        // 开启此规则，因为字符串中一般不会出现 Ctrl 键，所以一旦出现了，可能是一个代码错误
        'no-control-regex': 'error',
        // @fixable 禁止使用 debugger
        'no-debugger': 'error',
        // 禁止在函数参数中出现重复名称的参数
        'no-dupe-args': 'error',
        // 禁止在对象字面量中出现重复名称的键名
        'no-dupe-keys': 'error',
        //不能有不规则的空格
        'no-irregular-whitespace': 2,
        //禁止混用tab和空格
        'no-mixed-spaces-and-tabs': [2, false],
        //缩进风格
        'indent': ['error', 4, {'ArrayExpression': 1, 'SwitchCase': 1}],
        //语句强制分号结尾
        'semi': [2, 'always'],
        //函数定义时括号前面要不要有空格
        'space-before-function-paren': [0, 'always'],
        // if while function 后面的花括号
        'brace-style': ['error', 'stroustrup'],
        // 文件以\n结束
        'eol-last': ['error', 'always'],
        // if for while 括号
        'keyword-spacing': ['error', {'after': true}]
    }
}