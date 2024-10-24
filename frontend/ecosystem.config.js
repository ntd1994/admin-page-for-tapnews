module.exports = {
    apps: [{
      name: "TinVietToday_FE",
      instances: 1,
      autorestart: true,
      script: "npm",
      args: "run listen",
      env: {
        PORT: '8082',
      },
      watch: false
    }]
}
