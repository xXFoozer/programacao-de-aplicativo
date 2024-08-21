type Categoria ={
   nome: string;
   
   descricao: boolean;
}

type Produto={
    nome:string;
    preco: number;
    codigo: string;
    marca: string;    
    categoria: Categoria
}