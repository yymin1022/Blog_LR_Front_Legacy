const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        proxy("/", {
            target: "https://blog-api.defcon.or.kr"
        })
    );
}