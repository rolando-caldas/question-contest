import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Contest} from "./entity/Contest";
import {Observable, of} from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private apiUrl:string = 'http://localhost:8082/';

  constructor(
    private http: HttpClient
  ) { }

  getContests() : Observable<Contest[]> {
    return this.http.get<Contest[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError('getContests', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getContest(id:number) : Observable<Contest> {

    const url = `${this.apiUrl}contest/${id}`;

    return this.http.get<Contest>(url)
      .pipe(
        catchError(this.handleError<Contest>('`getContest id=${id}`'))
      );
  }

  createContest(Contest:Contest) : Observable<any> {

    return this.http.put(this.apiUrl, Contest, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateContest'))
    );
  }

  updateContest(Contest:Contest) : Observable<any> {

    const url = `${this.apiUrl}contest/${Contest._id}`;

    return this.http.put(url, Contest, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateContest'))
    );
  }
}
