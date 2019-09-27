module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // usage-按需引入 entry-入口引入（整体引入） false-不引入polyfill
        corejs: 2 // 2-corejs@2  3-corejs@3
      }
      // {
      //   targets: {
      //     ie: '9'
      //   }
      // }
    ]
  ],
  plugins: ['@babel/plugin-transform-runtime']
}
