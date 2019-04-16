const express = require('express')
const app = express();
const hbs = require('hbs');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const Curso = require('../models/modelCurses');
const Estudiante = require('../models/modelStudent');
const Usuario = require('../models/modelUser');

app.use( express.static(__dirname + '../../../public/'))

//Express HBS engine
hbs.registerPartials(__dirname + '../../../views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.redirect('/cursosDisponibles');
})
app.get('/cursosDisponibles', (req, res) => {
    res.render('cursosDisponibles');
})
app.get('/registroUsuario', (req, res) => {
    res.render('registroUsuario');
})
app.get('/homeAdmin', (req, res) => {
    res.render('homeAdmin');
})
app.get('/loginAdmin', (req, res) => {
    res.render('loginAdmin');
})
app.get('/registroCursos', (req, res) => {
    res.render('registroCursos');
})
app.get('/cursosAdmin', (req, res) => {
    res.render('cursosAdmin');
})
// Se guarda la informacion del usuario creado
app.post('/usuario', function (req, res) {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        cedula: body.cedula,
        password: bcrypt.hashSync(body.password, 10),
        telefono: body.telefono,
        role: body.role
    })

    usuario.save((err,usuarioDB)=>{
       
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok:true,
            usuario: usuarioDB
        });
    });    
});

//Se guarda la informacion del estudiante en la DB
app.post('/estudiantes', function (req, res) {

    let body = req.body;

    let estudiante = new Estudiante({
        nombre: body.nombre,
        email: body.email,
        cedula: body.cedula,
        telefono: body.telefono
    })

    estudiante.save((err,estudianteDB) => {
       
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok:true,
            estudiante: estudianteDB
        });
    });    
});

// Se hace guarda la informacion del curso en la DB
app.post('/cursos', function (req, res) {

    let body = req.body;

    let curso = new Curso({
        nombre: body.nombre,
        id: body.id,
        desc: body.desc
    })

    curso.save((err,cursoDB)=>{
       
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok:true,
            curso: cursoDB
        });
    });    
});
/*
app.put('/cursos/:id', function (req, res) {

    let id = req.params.id;
    let body = _.pick(req.body, ['nombre','email','img','role','estado']);
    

    Usuario.findByIdAndUpdate(id,body,{new: true, runValidators:true},(err, cursoDB) => {
        if(err){
            return res.status(400).json({
                ok:false,
                err
            });        
        }
        res.json({
            ok:true,
            usuario:cursoDB
        })
    })    
})
app.delete('/cursos', function (req, res) {
    res.json('delete Usuario')
})
*/
module.exports = app;