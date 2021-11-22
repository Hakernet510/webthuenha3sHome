class HomeController {

    index(req, res){
        res.render('renter')
    }

}

module.exports = new HomeController;
