import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class ServerService {
  // TODO set this var to your API endpoint
  private url = "mongodb+srv://QNAGV:so20SO20@cluster0.f2ee9.mongodb.net/sample_mflix?retryWrites=true&w=majority";

  constructor(private http: Http) {
    if (this.url === null) {
      alert('Hi, seems like you forgot to setup an api URL in ServerService.');
    }
  }

  postData(data: any) {
    let str = '';
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (str !== '') {
          str += '&';
        }
        str += key + '=' + encodeURIComponent(data[key]);
      }
    }

    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({headers: headers});
    return this.http.post(this.url, str, options);
  }
}
