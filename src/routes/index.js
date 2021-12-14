const loginController = require('./login')
const renterController = require('./renter')
const registerController = require('./register')
const postController = require('./post')
const filterController = require('./filter')
const landlordController = require('./landlord')
const forgotController = require('./forgot')
const detailController = require('./detail')
const manageController = require('./manage')
const adminController = require('./admin')
const deleteController = require('./delete')
const updateController = require('./update')
const switchController = require('./switch')
const updateHostelController = require('./updateHostel')
const multer = require('multer')

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

    app.use('/admin', adminController)

    app.use('/delete', deleteController)

    app.use('/update', updateController)

    app.use('/switch', switchController)

    app.use("/updateHostel", updateHostelController)

}

module.exports = route;
