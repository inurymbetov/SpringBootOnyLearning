import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Product} from "../entitiy/product";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StartPageServiceService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.apiBaseUrl;

  getAllProduct(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/product/`).pipe(
      catchError(err => throwError(err))
    )
  }

}
