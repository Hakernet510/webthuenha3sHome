const loginController = require('./login')
const homeController = require('./home')
const registerController = require('./register')
const postController = require('./post')
const filterController = require('./filter')
const boxController = require('./box')
const forgotController = require('./forgot')

function route(app) {

    app.use('/login', loginController)

    app.use('/home', homeController)
      
    app.use('/register', registerController)

    app.use('/forgot', forgotController)

    app.use('/post', postController)

    app.use('/filter', filterController)

    app.use('/box', boxController)
}

module.exports = route;
