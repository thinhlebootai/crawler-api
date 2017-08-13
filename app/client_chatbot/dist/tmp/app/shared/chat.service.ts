import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export abstract class ChatService {
	abstract send(message: string): Observable<Response>;
	abstract sendFeedback(listOfQuestions: any, listOfResults: any, value: any): Observable<Response>;
	abstract getCurrentIpLocation(): Observable<any>;
	abstract init(location: string): Observable<any>;
	abstract setConverID(id: string): boolean;
	abstract sendMessage(message: string): Observable<any>;

}

