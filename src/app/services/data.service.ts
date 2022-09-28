import { Apontamento } from './../models/apontamento.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private httpClient : HttpClient) { }

private url = "https://localhost:5001/Apontamentos"

private edv = new BehaviorSubject<string>('');
private partnumber = new BehaviorSubject<string>('');
private operation = new BehaviorSubject<string>('');
private machine = new BehaviorSubject<string>('');
private defeito = new BehaviorSubject<string>('');
private quantidade = new BehaviorSubject<number>(0);
private observacoes = new BehaviorSubject<string>('');

public addApontamento() : Observable<Apontamento>{
  const apontamento : Apontamento = ({
    edv: this.getEdv(),
    partnumber: this.getPartnumber(),
    operation: this.getOperation(),
    machine: this.getMachine(),
    defeito: this.getDefeito(),
    quantidade: this.getQuantidade(),
    observacoes: this.getObservacoes()
  })
  return this.httpClient.post<Apontamento>(this.url, apontamento)
}


public setEdv(edv : string){
  this.edv.next(edv);
}

public setPartnumber(partnumber : string){
  this.partnumber.next(partnumber);
}

public setOperation(operation : string){
  this.operation.next(operation);
}

public setMachine(machine : string){
  this.machine.next(machine);
}

public setDefeito(defeito : string){
  this.defeito.next(defeito);
}

public setQuantidade(quantidade : number){
  this.quantidade.next(quantidade);
}

public setObservacoes(observacoes : string){
  this.observacoes.next(observacoes);
}


public getEdv() : string{
  var edvReturn = ''
  this.edv.asObservable().subscribe(edv =>{
    edvReturn = edv
  })
  return edvReturn
}

public getPartnumber() : string{
  var partnumberReturn = ''
  this.partnumber.asObservable().subscribe(partnumber =>{
    partnumberReturn = partnumber
  })
  return partnumberReturn
}

public getOperation() : string{
  var operationReturn = ''
  this.operation.asObservable().subscribe(operation =>{
    operationReturn = operation
  })
  return operationReturn
}

public getMachine() : string{
  var machineReturn = ''
  this.machine.asObservable().subscribe(machine =>{
    machineReturn = machine
  })
  return machineReturn
}

public getDefeito() : string{
  var defeitoReturn = ''
  this.defeito.asObservable().subscribe(defeito =>{
    defeitoReturn = defeito
  })
  return defeitoReturn
}

public getQuantidade() : number{
  var quantidadeReturn = 0
  this.quantidade.asObservable().subscribe(quantidade =>{
    quantidadeReturn = quantidade
  })
  return quantidadeReturn
}

public getObservacoes() : string{
  var observacoesReturn = ''
  this.observacoes.asObservable().subscribe(observacoes =>{
    observacoesReturn = observacoes
  })
  return observacoesReturn
}

}
