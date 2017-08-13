"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var chat_service_1 = require('./chat.service');
var index_1 = require('./index');
var global_config_1 = require('./global.config');
var AngularChatBotService = (function (_super) {
    __extends(AngularChatBotService, _super);
    function AngularChatBotService(http) {
        _super.call(this);
        this.http = http;
    }
    AngularChatBotService.prototype.send = function (question) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var body = { question: question };
        return this.http.post(global_config_1.GlobalConfig.host + '/api/v1/message/search', JSON.stringify(body), { headers: headers });
    };
    AngularChatBotService.prototype.sendFeedback = function (listOfQuestions, listOfResults, value) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(index_1.Config.API + '/feedback', { id: Math.round(Math.random() * 1e9).toString(), questions: listOfQuestions, answers: listOfResults, feeling: value }, { headers: headers });
    };
    AngularChatBotService.prototype.getResults = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(index_1.Config.API + '/feedback', { headers: headers });
    };
    AngularChatBotService.prototype.getCurrentIpLocation = function () {
        return this.http.get('https://ipinfo.io/json')
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.throw(error.json());
        });
    };
    AngularChatBotService.prototype.init = function (location) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://zenzai.synapse.boot.ai/api/v1', JSON.stringify({ "user_id": 123, "message": "BMI", "location": location }), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.throw(error.json());
        });
    };
    AngularChatBotService.prototype.sendMessage = function (message) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://zenzai.synapse.boot.ai/api/v1', JSON.stringify({ "conversation_id": this.converId, "message": message }), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.throw(error.json());
        });
    };
    AngularChatBotService.prototype.setConverID = function (id) {
        this.converId = id;
        return true;
    };
    AngularChatBotService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AngularChatBotService);
    return AngularChatBotService;
}(chat_service_1.ChatService));
exports.AngularChatBotService = AngularChatBotService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYW5ndWxhci1jaGF0LWJvdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0Msc0JBQXVCLFNBQVMsQ0FBQyxDQUFBO0FBQ2pDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRy9DO0lBQTJDLHlDQUFXO0lBRXJELCtCQUFvQixJQUFVO1FBQzdCLGlCQUFPLENBQUM7UUFEVyxTQUFJLEdBQUosSUFBSSxDQUFNO0lBRTlCLENBQUM7SUFFRCxvQ0FBSSxHQUFKLFVBQUssUUFBZ0I7UUFDakIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksSUFBSSxHQUFHLEVBQUUsa0JBQVEsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBWSxDQUFDLElBQUksR0FBRyx3QkFBd0IsRUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGdCQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCw0Q0FBWSxHQUFaLFVBQWEsZUFBb0IsRUFBRSxhQUFrQixFQUFFLEtBQVU7UUFDaEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFNLENBQUMsR0FBRyxHQUFHLFdBQVcsRUFDeEMs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QyxDQUFDO0lBQ1YsQ0FBQztJQUVNLDJDQUFXLEdBQWxCLFVBQW1CLEVBQVU7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNiLENBQUM7SUFsRUY7UUFBQyxpQkFBVSxFQUFFOzs2QkFBQTtJQW1FYiw0QkFBQztBQUFELENBbEVBLEFBa0VDLENBbEUwQywwQkFBVyxHQWtFckQ7QUFsRVksNkJBQXFCLHdCQWtFakMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2FuZ3VsYXItY2hhdC1ib3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSAnLi9jaGF0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsgR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9nbG9iYWwuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJDaGF0Qm90U2VydmljZSBleHRlbmRzIENoYXRTZXJ2aWNlIHtcclxuXHRjb252ZXJJZDogc3RyaW5nO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHNlbmQocXVlc3Rpb246IHN0cmluZyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuXHQgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdCAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHQgICAgdmFyIGJvZHkgPSB7IHF1ZXN0aW9uIH07XHJcblx0ICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChHbG9iYWxDb25maWcuaG9zdCArICcvYXBpL3YxL21lc3NhZ2Uvc2VhcmNoJyxcclxuXHQgICAgICBKU09OLnN0cmluZ2lmeShib2R5KSwgeyBoZWFkZXJzIH0pO1xyXG5cdH1cclxuXHRzZW5kRmVlZGJhY2sobGlzdE9mUXVlc3Rpb25zOiBhbnksIGxpc3RPZlJlc3VsdHM6IGFueSwgdmFsdWU6IGFueSk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuXHRcdHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHQgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoQ29uZmlnLkFQSSArICcvZmVlZGJhY2snLFxyXG4gICAgICBcdFx0eyBpZDogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMWU5KS50b1N0cmluZygpLCBxdWVzdGlvbnM6IGxpc3RPZlF1ZXN0aW9ucywgYW5zd2VyczogbGlzdE9mUmVzdWx0cywgZmVlbGluZzogdmFsdWUgfSwgXHJcbiAgICAgIFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblx0fVxyXG5cdGdldFJlc3VsdHMoKSB7XHJcblx0XHR2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0ICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoQ29uZmlnLkFQSSArICcvZmVlZGJhY2snLFxyXG4gICAgICBcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cdH1cclxuXHJcblx0IHB1YmxpYyBnZXRDdXJyZW50SXBMb2NhdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwczovL2lwaW5mby5pby9qc29uJylcclxuICAgICAgICAubWFwKChyZXMpOiBSZXNwb25zZSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdChsb2NhdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cdFx0IHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly96ZW56YWkuc3luYXBzZS5ib290LmFpL2FwaS92MScsXHJcblx0XHRcdCBKU09OLnN0cmluZ2lmeSh7XCJ1c2VyX2lkXCI6MTIzLCBcIm1lc3NhZ2VcIjpcIkJNSVwiLCBcImxvY2F0aW9uXCI6IGxvY2F0aW9ufSksXHJcblx0XHRcdCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgLm1hcCgocmVzKTogUmVzcG9uc2UgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSk7XHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2VuZE1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cdFx0IHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly96ZW56YWkuc3luYXBzZS5ib290LmFpL2FwaS92MScsXHJcblx0XHRcdCBKU09OLnN0cmluZ2lmeSh7XCJjb252ZXJzYXRpb25faWRcIjogdGhpcy5jb252ZXJJZCwgXCJtZXNzYWdlXCI6bWVzc2FnZX0pLFxyXG5cdFx0XHQge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAoKHJlcyk6IFJlc3BvbnNlID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpO1xyXG4gICAgICAgIH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldENvbnZlcklEKGlkOiBzdHJpbmcpOiBib29sZWFue1xyXG5cdFx0dGhpcy5jb252ZXJJZCA9IGlkO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuIl19
