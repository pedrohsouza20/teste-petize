import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { UserProfile } from '../interfaces/UserProfile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private readonly url = "https://api.github.com/users/";

  public cache: UserProfile = {};

  constructor(private httpClient: HttpClient) {
  }

  getUserByUserName(userName: String){
    const newUrl = this.url + userName;
    console.log(newUrl)
    return this.httpClient.get<UserProfile>(newUrl).pipe(
      tap(data => data)
    )
  }

}
