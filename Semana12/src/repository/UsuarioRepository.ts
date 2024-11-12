import { Client } from "pg";
import Ususario from "src/entity/Usuario";

export default class UsuarioRepository {
    private connection: Client

    constructor() {
       if( !this.connection ){
         this.connection = new Client({
            host: 'localhost',
            port: 5432,
            database: 'revenda',
            user: 'postgres',
            password: 'senai'      
        })
       }
        
    }

   async save(usuario: Ususario){
    try {
        this.connection.connect();
        const sql = "INSERT INTO usuario (id, nome, email, passwor_hash, data_nascimento, criado_em, atualizado_em) VALUES ($1, $2, $3, $4, $5, $6, $7)";
        const values = [usuario.getId(), usuario.getName(), usuario.getEmail(), usuario.getPassword(),usuario.getData_nascimento(), usuario.getCriado_em(),usuario.getAtualizado_em()]
       await this.connection.query(sql,values);
        } catch (error) {
        console.log(error);        
        } finally {
        this.connection.end();
        this.connection = null;
        }


    }

    async findByEmail(id: string){
        try {
            this.connection.connect()
            const sql = "SELECT * FROM usuarios WHERE email = $1";
            const result = await this.connection.query(sql,[id])
            return result.rows[0];
        } catch (error) {
            console.log(error)
        }finally{
            this.connection.end();
            this.connection = null;
        }
    }
    
    async delete(id: string){
        try {
            this.connection.connect()
            const sql = "UPDATE  veiculos SET esta_ativo = $1 WHERE id = $2";
            await this.connection.query(sql, [false, id])
        } catch (error) {
                console.log(error)
        }finally{
            this.connection.end();
            this.connection = null;
        }
    }
}