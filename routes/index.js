import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/status', (req, res) => {
  res.status(200).send('Servidor está funcionando corretamente');
});

export default router;
