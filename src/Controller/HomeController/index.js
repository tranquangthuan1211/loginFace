const Login = require('../../Model/index.js')
class HomeController {
    home(req,res) {
       Login.find({})
       .then((user) => {
        res.json(user)
       })
       .catch((error) => {
        console.log(error)
       })
    }
    handle(req,res,next) {
        console.log(req.body)
        const formData = req.body;

        const user = new Login(formData);

        user.save()
            .then(() => res.json("save successfully"))
            .catch((error) => console.log(error))
    }
    
}

module.exports = new HomeController();