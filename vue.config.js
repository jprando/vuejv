const IN_PROD = process.env.NODE_ENV === "production"
//
module.exports = {
    devServer: {
        disableHostCheck: !IN_PROD
    }
}