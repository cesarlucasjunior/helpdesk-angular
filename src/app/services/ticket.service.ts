import { Ticket } from './../model/ticket.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

  createOrUpdate(ticket:Ticket){
    if(ticket.id != null && ticket.id != ''){
      return this.http.put('${HELP_DESK_API}/api/ticket', ticket);
    } else {
      ticket.id = null;
      ticket.status = 'NOVO';
      return this.http.post('${HELP_DESK_API}/api/ticket', ticket);
    }
  }

  findAll(page: number, count: number){
    return this.http.get('${HELP_DESK_API}/api/ticket/${page}/${count}');
  }

  findById(id: string){
    return this.http.get('${HELP_DESK_API}/api/ticket/${id}');
  }

  delete(id: string){
    return this.http.delete('${HELP_DESK_API}/api/ticket/${id}');
  }

  findByParams(page:number, count:number, designadoParaMim:boolean, ticket:Ticket){
    
  }

  changeStatus(status:string, ticket:Ticket){
    return this.http.put('${HELP_DESK_API}/api/ticket/${ticket.id}/${status}', ticket);
  }

  summary(){
    return this.http.get('${HELP_DESK_API}/api/ticket/summary');
  }

}
