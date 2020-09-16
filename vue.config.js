module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                'components':'@/components',
                'assets':'@/assets',
                'request':'@/request'
            }
        }
    },
    devServer:{
        host:'localhost',
        port:3000
    }
}