module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
     parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'jsx-a11y','import'],
      settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // "off"可以替换成0，代表关闭该规则
    // "warn"可以替换成1，代表打开规则，提示警告，但不会报错
    // "error"可以替换成2，代表打开规则，直接报错
    'no-var': 2, // 不能使用var声明变量
    'no-extra-semi': 2, // 禁止多余的冒号
    semi: 2,
    'semi-style': ['error', 'last'],
    '@typescript-eslint/no-extra-semi': 2,
    // '@typescript-eslint/indent': ['error', 2], // 缩进 2
    quotes: ['error', 'single'], // 字符串使用单双引号,double,single
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2, // 函数参数不能重复
    'no-const-assign': 2, // 禁止修改const声明的变量
    'no-eq-null': 2, // 禁止对null使用==或!=运算符
    'no-eval': 1, // 禁止使用eval
    'no-ex-assign': 2, // 禁止给catch语句中的异常参数赋值
    'no-extend-native': 2, // 禁止扩展native对象
    'no-extra-bind': 2, // 禁止不必要的函数绑定
    'no-inline-comments': 0, // 禁止行内备注
    'no-inner-declarations': [2, 'functions'], // 禁止在块语句中使用声明（变量或函数）
    'no-invalid-regexp': 2, // 禁止无效的正则表达式
    'no-invalid-this': 2, // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-irregular-whitespace': 2, // 不能有不规则的空格
    'no-labels': 2, // 禁止标签声明
    'no-lone-blocks': 2, // 禁止不必要的嵌套块
    'no-multi-spaces': 1, // 不能用多余的空格
    'no-multi-str': 2, // 字符串不能用\换行
    'no-multiple-empty-lines': [1, { max: 2 }], // 空行最多不能超过2行
    'no-native-reassign': 2, // 不能重写native对象
    'no-negated-in-lhs': 2, // in 操作符的左边不能有!
    'no-nested-ternary': 0, // 禁止使用嵌套的三目运算
    'no-new': 1, // 禁止在使用new构造一个实例后不赋值
    'no-new-func': 1, // 禁止使用new Function
    'no-new-object': 2, // 禁止使用new Object()
    'no-new-require': 2, // 禁止使用new require
    'no-new-wrappers': 2, // 禁止使用new创建包装实例，new String new Boolean new Number
    'no-redeclare': 2, // 禁止重复声明变量
    'no-regex-spaces': 2, // 禁止在正则表达式字面量中使用多个空格 /foo bar/
    'no-restricted-modules': 0, // 如果禁用了指定模块，使用就会报错
    'no-throw-literal': 2, // 禁止抛出字面量错误 throw 'error';
    // 'no-undef': 1, // 不能有未定义的变量
    'no-undef-init': 2, // 变量初始化时不能直接给它赋值为undefined
    // 'no-undefined': 2, // 不能使用undefined
    'no-unexpected-multiline': 2, // 避免多行表达式
    'no-param-reassign': ['error', { props: false }], // 防止对函数参数进行重新赋值
    'no-console': 'off', // 不进行检查console.log
    'import/prefer-default-export': 'off',
    // 禁止使用递增和递减运算符（++和--）
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    '@typescript-eslint/ban-types': 'off',
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }], // 检测项目中导入的外部模块是否被正确地列为项目的依赖项
    // 关闭variable必须全部大写规则
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        modifiers: ['const'],
        format: null,
      },
    ],
  },
};
