module.exports = {
    name: process.env.APP_NAME || "NodeJS App",
    port: process.env.APP_PORT || 3000,
    jwt_secret: process.env.JWT_SECRET || "secret",
}
