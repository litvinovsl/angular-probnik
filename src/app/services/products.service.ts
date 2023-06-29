import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, delay, throwError } from "rxjs";
import { IProduct } from "../models/product";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    constructor (private http: HttpClient){}

    getAll(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products',{
         params: new HttpParams({
            fromObject:{limit: 5}
         })
        }).pipe(
            delay(1000)
            // catchError(this.errorHandler)
            // catchError(this.errorHandler)
            )
    }

    private errorHandler(error: HttpErrorResponse){
        return throwError(() => error.message)
    }
}