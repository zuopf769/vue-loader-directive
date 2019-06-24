const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    configureWebpack: config => {
        config.resolve.alias = Object.assign(config.resolve.alias, {
            'src': resolve('src')
        });
    }
};
