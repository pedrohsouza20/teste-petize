import { Injectable } from '@angular/core';
import { Repository } from '../interfaces/Repository';
import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetRepositoriesService {
  constructor(private httpClient: HttpClient) {}

  getRepositories(url: string){
    console.log(url);
    return this.httpClient.get<Repository[]>(url).pipe(
      first(),
      tap((data) => data)
    );
  }
}
