module.exports.checkUser = function(req, res, next) {
    const userid = req.session.userid

    if(!userid) {
        res.redirect("/logando")
    }

    next()
}

