const path = require('path')

module.exports = (options, ctx) => {
    return {
        name: 'vuepress-plugin-home-button',
        clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
        async ready() {
            console.log('Using Self Home Button');
        }

    }
}
