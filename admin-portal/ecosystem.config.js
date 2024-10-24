module.exports = {
  apps: [
    {
      name: "iamtapnews_admin",
      script: ".output/server/index.mjs",
      watch: false,
      autorestart: true,
      exec_mode: "fork",
      instances: 1,
      env: {
        NODE_ENV: "production",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};