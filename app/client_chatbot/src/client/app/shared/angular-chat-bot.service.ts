import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ChatService } from './chat.service';
import { Config } from './index';
import { GlobalConfig } from './global.config';

@Injectable()
export class AngularChatBotService extends ChatService {
	constructor(private http: Http) {
		super();
	}

	send(question: string): Observable<Response> {
	    var headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    var body = { question };
	    return this.http.post(GlobalConfig.host + '/api/v1/message/search',
	      JSON.stringify(body), { headers });
	}
	sendFeedback(listOfQuestions: any, listOfResults: any, value: any): Observable<Response> {
		var headers = new Headers();
	    headers.append('Content-Type', 'application/json');
		return this.http.post(Config.API + '/feedback',
      		{ id: Math.round(Math.random() * 1e9).toString(), questions: listOfQuestions, answers: listOfResults, feeling: value }, 
      		{ headers: headers });
	}
	getResults() {
		var headers = new Headers();
	    headers.append('Content-Type', 'application/json');
		return this.http.get(Config.API + '/feedback',
      		{ headers: headers });
	}
}

