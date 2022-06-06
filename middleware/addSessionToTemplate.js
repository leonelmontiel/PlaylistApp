function addSessionToTemplate(config) { 
    return function(req, res, next) {
        const user = req.session.user

        res.locals.user = user

        next()
    }
}
// en index iría app.use(addSessionToTemplate())

/* function addSessionToTemplate(req, res, next) { // next (función): para pasar a una siguiente acción (otro middleware o un controller dentro del server)
    const user = req.session.user

    res.locals.user = user

    next()
} */
//en index iría app.use(addSessionToTemplate)

module.exports = addSessionToTemplate