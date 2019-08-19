module.exports = {
  presets: [
    '@vue/app',
    [
      '@babel/preset-env', 
      { 
        targets: { 
          node: 'current' 
        } 
      }
    ],
    {
      "modules": "commonjs"
    }
  ],
  // plugins: [
  //   "@babel/plugin-transform-async-to-generator",
  //   "@babel/plugin-transform-runtime"
  // ]
}
