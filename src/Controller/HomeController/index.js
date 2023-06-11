const Login = require('../../Model/index.js')
class HomeController {
    home(req,res) {
       res.render("./home/home.handlebars")
    }
    handle(req,res,next) {
        console.log(req.body)
        const formData = req.body;

        const user = new Login(formData);

        user.save()
            .then(() => res.redirect('/'))
            .catch((error) => console.log(error))
    }
    
}

module.exports = new HomeController();