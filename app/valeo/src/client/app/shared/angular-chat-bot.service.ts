import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GlobalConfig } from './global.config';

@Injectable()
export class AngularChatBotService {
	converId: string;
	userId: number;
	constructor(private http: Http) {
	}

	send(question: string): Observable<Response> {
	    var headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    var body = { question };
	    return this.http.post(GlobalConfig.host + '/api/v1/message/search',
	      JSON.stringify(body), { headers });
	}
	// sendFeedback(listOfQuestions: any, listOfResults: any, value: any): Observable<Response> {
	// 	var headers = new Headers();
	//     headers.append('Content-Type', 'application/json');
	// 	return this.http.post(Config.API + '/feedback',
     //  		{ id: Math.round(Math.random() * 1e9).toString(), questions: listOfQuestions, answers: listOfResults, feeling: value },
     //  		{ headers: headers });
	// }
	// getResults() {
	// 	var headers = new Headers();
	//     headers.append('Content-Type', 'application/json');
	// 	return this.http.get(Config.API + '/feedback',
     //  		{ headers: headers });
	// }

	 public getCurrentIpLocation(): Observable<any> {
        return this.http.get('https://ipinfo.io/json')
        .map((res): Response => res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error.json());
        });
    }

    public init(location: string, userId: number): Observable<any> {
    var id: number;
    if (this.userId) {
      id = this.userId;
    } else {
      id = userId;
    }
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		 return this.http.post('https://zenzai.synapse.boot.ai/api/v1',
			 JSON.stringify({"user_id": id, "location": location}),
			 {headers: headers})
        .map((res): Response => res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error.json());
        });
	}

	public sendMessage(message: string): Observable<any> {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		 return this.http.post('https://zenzai.synapse.boot.ai/api/v1',
			 JSON.stringify({"conversation_id": this.converId, "message":message}),
			 {headers: headers})
        .map((res): Response => res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error.json());
        });
	}

	public setConverID(id: string): boolean{
		this.converId = id;
		return true;
	}

	public getListUser(): Observable<any> {
	    return this.http.get(GlobalConfig.host + '/api/v1/user').map((res: Response) => res.json());
  }

  public setUserId(userId: number): void {
	    this.userId = userId;
  }
}


