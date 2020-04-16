import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from "@angular/common/http";
import { environment } from "../environments/environment";
@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  post(endpoint, body) {
    var url = environment.api_url + endpoint;
    var header = new HttpHeaders({ "content-type": "application/json" });
    return this.http.post(url, body, { headers: header });
  }
}
