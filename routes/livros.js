import e from "express";
import { obterLivros, incluir, excluir } from "../src/modelo/livro-dao.js";

const router = e.Router()

router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros)
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter livros'})
  }
})

router.post('/', async (req, res) => {
  try {
    const novoLivro = req.body;
    await incluir(novoLivro)
    res.json({ message: 'Livro incluido com sucesso'})
  } catch (error) {
    res.status(500).json({ message: 'Erro ao incluir livro'})
  }
})

router.delete('/:codigo', async (req, res) => {
  try {
    const codigo = req.params.codigo;
    await excluir(codigo)
    res.json({ message: 'Livro excluido com sucesso'})
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir livro'})
  }
})

export default router;