const express = require("express");
const session = require("express-session");
const FileStore = require ("session-file-store")(session);
const flash = require("express-flash");
const { error } = require("console");
const app = express();
const conn = require("./db/conn")

//models
const FitVitality = require("./models/FitVitality")
const User = require("./models/FitVitality")

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(session({
    name: "session", 
    secret: "nosso_secret", 
    resave: false, 
    saveUninitialized: false, 
    store: new FileStore({ //salvar seesão em arquivo no servidor
        logFn: function (){},
        path: require("path").join(require("os").tmpdir(), "sessions"), //onde salvará as sessions
    }), 
    secure: false, 
    maxAge: 360000, 
    expires: new Date(Date.now() + 360000),
    httpOnly: true
}))

app.use(flash())

app.use(express.static("public"))

app.use((req, res, next) => {
    if(req.session.userid){
        res.locals.session = req.session
    }

    next()
})

conn.sync().then(() => {
    app.listen(2000)
}).catch((error) => {
    console.log(`Erro interno na conexão ${error}`)
})