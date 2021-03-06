const path = require('path');

module.exports = {
    entry: './src/ui/app.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: './app.js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-react"]
                        }
                    }
                ]
            },
            {
                test: /\.css/,
                use: [
                    {loader: 'file-loader', options: {name: './css/[name].css'}}
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {name:'./404.html'}
                    }
                ]
            }
        ]
    }

}
