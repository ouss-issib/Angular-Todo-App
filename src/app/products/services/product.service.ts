import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'https://dummyjson.com/products';

  constructor(private http : HttpClient) { }

  fetchProducts():Observable<any>{
    return this.http.get(this.url);
  }

}

