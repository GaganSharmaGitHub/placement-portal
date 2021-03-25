const path =require('path')
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist'),
    },
    mode:'none',
    module:{
        rules:[{
            test: /\.(scss|css|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        }]
    },
    devServer:{
        contentBase:path.join(__dirname,'public'),
        port:9000
    }
}