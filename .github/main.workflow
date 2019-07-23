workflow "packtracker.io" {
  on = "push"
  resolves = ["Report to packtracker.io"]
}

action "Report to packtracker.io" {
  uses = "packtracker/report@2.1.2"
  secrets = ["0dfbc838-9ecd-43d3-9b6f-a582f2e4eea1"]
  env = {
    "WEBPACK_CONFIG_PATH" = "./webpack.config.js"
  }
}