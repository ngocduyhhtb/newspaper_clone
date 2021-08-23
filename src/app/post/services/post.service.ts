import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Post} from "../model/post.model";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'Application/json'})
}
const API_URL: String = "https://newsapi.org/v2/"

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public resCache = new Map();

  constructor(private httpClient: HttpClient) {
  }

  public getNewsAboutCovid(): Observable<Post[]> {
    const postCache = this.resCache.get(API_URL);
    if (postCache) {
      return of(postCache);
    }
    console.log("Api Request");
    return this.httpClient.get<Post[]>(API_URL + "/everything?q=covid&apiKey=0c898bdec203435e9c7de0db292e6565");
  }
}
