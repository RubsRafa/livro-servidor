export class Livro {
  codigo: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(props: {
    codigo: number,
    codEditora: number,
    titulo: string,
    resumo: string,
    autores: string[],
  }){
    this.codigo = props.codigo;
    this.codEditora = props.codEditora;
    this.titulo = props.titulo;
    this.resumo = props.resumo;
    this.autores = props.autores;
  }
}
