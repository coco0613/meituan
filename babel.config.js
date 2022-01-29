module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //样式按需引入
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true,
      },
      'vant',
    ],
  ],
}
