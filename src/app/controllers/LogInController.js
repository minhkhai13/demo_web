class LogInController {

    login(req,res){
        res.render('login')
    }
}
module.exports = new LogInController();