const test = require('ava')
const { dependencies, devDependencies } = require('../package.json')
const dropModules = ['micro-dev']
const isDropped = (module) => !dropModules.includes(module)

test('basic check', t => {
  t.true(true, 'ava works ok')
})

if (Object.keys(dependencies).length > 0) {
  Object.keys(dependencies).filter(isDropped).forEach((dependency) => {
    test(`${dependency} loads ok`, t => {
      const module = require(dependency)
      t.truthy(module)
    })
  })
} else {
  test('no dependecies to test', t => {
    t.truthy(true)
  })
}

if (Object.keys(devDependencies).length > 0) {
  Object.keys(devDependencies).filter(isDropped).forEach((dependency) => {
    test(`${dependency} loads ok`, t => {
      const module = require(dependency)
      t.truthy(module)
    })
  })
} else {
  test('no devDependecies to test', t => {
    t.truthy(true)
  })
}
