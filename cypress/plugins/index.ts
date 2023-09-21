const corePlugins = require('@company/e2e-core/plugins')

module.exports = function plugins(on, config) {
  require('@cypress/code-coverage/task')(on, config)
  corePlugins(on, config)

  return config
}
