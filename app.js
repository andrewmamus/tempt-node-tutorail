// npm - global command, comes with node
// npm --version || npm -v

// local dependency - use it only in this paticular project
// npm <packageName>


// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (ubuntu)

// package.json - manifest file (stores important info about project/packages)'
// manual approach ( create package.json in the root, create properties etc)
// npm init -y (everything default)


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems);