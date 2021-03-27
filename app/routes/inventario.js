
const Controlador = require('../controllers/tiendacontroller.js')
var router = require('express').Router();

router.get('/inventario/tienda/:numero', function(req, res) {
    Controlador.list(req,res);
});
module.exports = router;