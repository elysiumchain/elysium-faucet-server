module.exports = {
  apps: [
    {
      name: "Elysium Faucet",
      script: "npm",
      automation: false,
      args: "start",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
