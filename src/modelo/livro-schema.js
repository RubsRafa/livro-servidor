import mongoose from "mongoose";

const LivroSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },
  titulo: {
    type: String,
    required: true,
  },
  codEditora: {
    type: Number,
    required: true,
  },
  resumo: {
    type: String,
    required: true,
  },
  autores: {
    type: [String],
    required: true,
  },
}, {
  collection: 'livros'
})

const Livro = mongoose.model('Livro', LivroSchema);

export default Livro;