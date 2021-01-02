module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.',
    interpreter: '/Users/matthew/.nvm/v15.5.0/bin/node'
  }],

  deploy : {
    production : {
      user : 'matthew',
      host : '192.168.1.5',
      ref  : 'origin/master',
      repo : 'git@github.com:mattwilliams/webpage-.git',
      path : '/Users/matthew/webpage/',
      'pre-deploy-local': '',
      'post-deploy' : 'ls -alg && whoami',
      'pre-setup': ''
    }
  }
};
