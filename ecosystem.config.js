module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'matthew',
      host : '192.168.1.5',
      ref  : 'origin/master',
      repo : 'git@github.com:mattwilliams/webpage-.git',
      path : '/Users/matthew/webpage/',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
