const { Sequelize } = require('sequelize');

const db = new Sequelize('mysql://root:uOjetjwcsZnKJIrbSVQzSNBzbZkgzeLH@tokaido.proxy.rlwy.net:51870/railway', {
    dialect: 'mysql',
    logging: false
});

module.exports = db;
