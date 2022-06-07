import { conexao } from "./connection.js";

export async function Adicionar (vilao){
    const comando =
     `
     INSERT INTO tb_vilao (nm_anime)
     VALUES (?,?,?)
    `

    const [resposta] = await conexao.query(comando, [vilao.nome]);
    
    vilao.nome = resposta.insertId;

    return vilao;
}

export async function Listar (){
    const comando = 
    ` 
    SELECT * from tb_vilao
`
const [resposta] = await conexao.query(comando)
return resposta
}

