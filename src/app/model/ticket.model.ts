import { User } from './user.model';
export class Ticket{

    constructor(
        public id: string,
        public numeroTicket: string,
        public titulo: string,
        public status: string,
        public prioridade: string,
        public imagem: string,
        public usuario: User,
        public usuarioDesignado: User,
        public data: string,
        public listaAlteracoes: Array<string>
    ){}
}