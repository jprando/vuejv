const PacktrackerPlugin = require('@packtracker/webpack-plugin')

module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    new PacktrackerPlugin({
      project_token: '0dfbc838-9ecd-43d3-9b6f-a582f2e4eea1',
      upload: true,
      fail_build: true
    })
  ]
}
