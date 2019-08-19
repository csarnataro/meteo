module.exports = {
  'presets': [
    ['@babel/preset-env', { 'modules': false }]
  ],
  'env': {
    'test': {
      'presets': [
        ['@babel/preset-env', { 'targets': { 'node': 'current' } }]
      ]
    }
  }
}

// presets: [
//   '@vue/app',
//   ['@babel/preset-env'],
// ],
// env: {
//   test: {
//     presets: [
//       [
//         '@babel/preset-env',
//         {
//           targets: {
//             node: 'current'
//           }
//         }
//       ]
//     ]
//   }
// },
// plugins: [
//   // '@babel/plugin-transform-modules-commonjs',
//   // '@babel/plugin-transform-async-to-generator'
//   '@babel/plugin-transform-runtime'
// ]
