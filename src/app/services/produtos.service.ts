import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  uri = environment.apiUrl + "/produtos";

  constructor(private httpCliente: HttpClient) { }

  getAll() {
    return this.httpCliente.get(this.uri);
  }

  getById(idProduto: string) {
    return this.httpCliente.get(this.uri + "/" + idProduto);
  }
}
