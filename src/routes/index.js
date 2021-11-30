const loginController = require('./login')
const renterController = require('./renter')
const registerController = require('./register')
const postController = require('./post')
const filterController = require('./filter')
const landlordController = require('./landlord')
const forgotController = require('./forgot')
const detailController = require('./detail')
const manageController = require('./manage')
const logoutController = require('./logout')

function route(app) {

    app.use('/login', loginController)

    app.use('/renter', renterController)

    app.use('/landlord', landlordController)
      
    app.use('/register', registerController)

    app.use('/forgot', forgotController)

    app.use('/post', postController)

    app.use('/filter', filterController)

    app.use('/detail', detailController)

    app.use('/manage', manageController)

    app.use('/logout', logoutController)
}

module.exports = route;
