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
    AngularChatBotService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AngularChatBotService);
    return AngularChatBotService;
}(chat_service_1.ChatService));
exports.AngularChatBotService = AngularChatBotService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYW5ndWxhci1jaGF0LWJvdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0Msc0JBQXVCLFNBQVMsQ0FBQyxDQUFBO0FBQ2pDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRy9DO0lBQTJDLHlDQUFXO0lBQ3JELCtCQUFvQixJQUFVO1FBQzdCLGlCQUFPLENBQUM7UUFEVyxTQUFJLEdBQUosSUFBSSxDQUFNO0lBRTlCLENBQUM7SUFFRCxvQ0FBSSxHQUFKLFVBQUssUUFBZ0I7UUFDakIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksSUFBSSxHQUFHLEVBQUUsa0JBQVEsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBWSxDQUFDLElBQUksR0FBRyx3QkFBd0IsRUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGdCQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCw0Q0FBWSxHQUFaLFVBQWEsZUFBb0IsRUFBRSxhQUFrQixFQUFFLEtBQVU7UUFDaEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFNLENBQUMsR0FBRyxHQUFHLFdBQVcsRUFDeEMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDdEgsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsMENBQVUsR0FBVjtRQUNDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBTSxDQUFDLEdBQUcsR0FBRyxXQUFXLEVBQ3ZDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLG9EQUFvQixHQUEzQjtRQUNNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQzthQUM3QyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQWUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ2xDLEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFsQ0w7UUFBQyxpQkFBVSxFQUFFOzs2QkFBQTtJQW1DYiw0QkFBQztBQUFELENBbENBLEFBa0NDLENBbEMwQywwQkFBVyxHQWtDckQ7QUFsQ1ksNkJBQXFCLHdCQWtDakMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2FuZ3VsYXItY2hhdC1ib3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSAnLi9jaGF0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsgR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9nbG9iYWwuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJDaGF0Qm90U2VydmljZSBleHRlbmRzIENoYXRTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRzZW5kKHF1ZXN0aW9uOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcblx0ICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHQgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblx0ICAgIHZhciBib2R5ID0geyBxdWVzdGlvbiB9O1xyXG5cdCAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoR2xvYmFsQ29uZmlnLmhvc3QgKyAnL2FwaS92MS9tZXNzYWdlL3NlYXJjaCcsXHJcblx0ICAgICAgSlNPTi5zdHJpbmdpZnkoYm9keSksIHsgaGVhZGVycyB9KTtcclxuXHR9XHJcblx0c2VuZEZlZWRiYWNrKGxpc3RPZlF1ZXN0aW9uczogYW55LCBsaXN0T2ZSZXN1bHRzOiBhbnksIHZhbHVlOiBhbnkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcblx0XHR2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0ICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5BUEkgKyAnL2ZlZWRiYWNrJyxcclxuICAgICAgXHRcdHsgaWQ6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlOSkudG9TdHJpbmcoKSwgcXVlc3Rpb25zOiBsaXN0T2ZRdWVzdGlvbnMsIGFuc3dlcnM6IGxpc3RPZlJlc3VsdHMsIGZlZWxpbmc6IHZhbHVlIH0sIFxyXG4gICAgICBcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cdH1cclxuXHRnZXRSZXN1bHRzKCkge1xyXG5cdFx0dmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdCAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5BUEkgKyAnL2ZlZWRiYWNrJyxcclxuICAgICAgXHRcdHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHR9XHJcblxyXG5cdCBwdWJsaWMgZ2V0Q3VycmVudElwTG9jYXRpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cHM6Ly9pcGluZm8uaW8vanNvbicpXHJcbiAgICAgICAgLm1hcCgocmVzKTogUmVzcG9uc2UgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=
