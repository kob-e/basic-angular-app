import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient: HttpClient) { }

  memberData(): Observable<any> {
    return this.httpClient.get(environment.serverUrlAuth + 'members/1')
  }
}
