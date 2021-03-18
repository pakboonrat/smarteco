import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders , HttpErrorResponse } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

export class Nikom {
  _id!: String;
  name!: String;
  username!: String;
  password!: String;
  firstname!: String;
  surname!: String;
  email!: String;
  tel!: String;

}

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  // Node Express API
  REST_API: string = 'http://localhost:8000/api';

  // HTTP Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

    //Add
  AddNikom(data: Nikom): Observable<any> {
    let API_URL = `${this.REST_API}/add-nikom`;
      return this.httpClient.post(API_URL,data)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Get all Nikoms
  GetNikoms(){
      return this.httpClient.get('${this.REST_APT}');
    }

  //Get single Nikoms
  GetNikom(id: any): Observable<any>{
      let API_URL = '${this.REST_API}/read-nikom/${id}';
      return this.httpClient.get(API_URL,{headers: this.httpHeaders})
      .pipe(map((res:any) => {
        return res || {}
      }),
      catchError(this.handleError)
      )
  }

  //Update
  updateNikom(id:any, data:any): Observable<any>{
      let API_URL = '${this.REST_API}/update-nikom/${id}';
      return this.httpClient.put(API_URL, data,{headers:this.httpHeaders})
        .pipe(
          catchError(this.handleError)
        )
  }

    //Delete
  deleteNikom(id:any): Observable<any>{
      let API_URL = '${this.REST_API}/delete-nikom/${id}';
      return this.httpClient.delete(API_URL, {headers:this.httpHeaders})
        .pipe(
          catchError(this.handleError)
        )
  }


    //ERROR
  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      // Handle client error
      errorMessage = error.error.message;
    }else{
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
 }

