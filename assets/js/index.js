const express = require("express");
const exbhs = require("express-handlebars");
const session = require("express-session");
const FileStore = require ("session-file-store")(session);
const flash = require("express-flash");
const { error } = require("console");
const app = express();
const conn = require("./db/conn")
const path = require("path")

const userRoutes = require("./routes/userRoutes")
const fitRoutes = require("./routes/fitRoutes")
//controles
const FitController = require("./controllers/FitController")
const UserController = require("./controllers/UserController")
//models
const FitVitality = require("./models/FitVitality")
const User = require("./models/FitVitality")

app.engine("handlebars", exbhs.engine({ defaultLayout: false }));
app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, '../../templates'));

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

app.use(express.static(path.join(__dirname, "../../public")));

app.use(express.static(path.join(__dirname, "../../img")));

app.use(express.static(path.join(__dirname, "../../assets/js")));

app.use(express.static(path.join(__dirname, "../../assets/css")));


app.use((req, res, next) => {
    if(req.session.userid){
        res.locals.session = req.session
    }

    next()
})

app.use("/", userRoutes)
app.use("/", fitRoutes )

conn.sync().then(() => {
    app.listen(2000)
}).catch((error) => {
    console.log(`Erro interno na conexão ${error}`)
})
