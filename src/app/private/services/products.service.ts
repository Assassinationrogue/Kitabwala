import { tap } from 'rxjs/operators';
import { Book, Stationary } from './../models/products';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl: String = environment.apiUrl;
  private apiPort: number = environment.apiPort;
  private apiRoute: string = '/products';
  constructor(private http: HttpClient) {}

  /**
   * Gets products list
   * @param category types are accepted
   * @returns
   */
  postProducts(category: string): Observable<Stationary> {
    return this.http.post<Stationary>(
      `${this.apiUrl}:${this.apiPort}/products`,
      {
        category: category,
      }
    );
  }

  /**
   *
   * @param isbn accepts ISBN 10 or ISBN 13 numbers
   * @returns
   */
  postBookIsbn(isbn: String | undefined, bookName: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}:${this.apiPort}/products/isbn`, {
        isbn: isbn,
        bookName: bookName,
      })
      .pipe(
        tap((data) => {
          console.log(data);
        })
      );
  }
  // TODO: develop an isbn 10 or isb 13 checker
}
