// lệnh terminal webpack -p xuất thành mini file, webpack xuất file thường
module.exports = {
    entry:["./jsFile/main.js"], // File build webpack [Có thể build nhiều file]
    output:{
        path: __dirname, //Đường dẫn sau khi build webpack file sẽ chưa ở đó
        filename: "bundle.js"
    },
    module:{
        // loaders: [ // Module loader [Phải cài đặt module mới sử dụng được]
        //     {test: /\.css$/, loader: "style-loader!css-loader"} // Set thuộc tính để build file css
        // ]
    }
};