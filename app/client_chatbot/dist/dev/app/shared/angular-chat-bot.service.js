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
    AngularChatBotService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AngularChatBotService);
    return AngularChatBotService;
}(chat_service_1.ChatService));
exports.AngularChatBotService = AngularChatBotService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYW5ndWxhci1jaGF0LWJvdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFFeEQsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0Msc0JBQXVCLFNBQVMsQ0FBQyxDQUFBO0FBQ2pDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRy9DO0lBQTJDLHlDQUFXO0lBQ3JELCtCQUFvQixJQUFVO1FBQzdCLGlCQUFPLENBQUM7UUFEVyxTQUFJLEdBQUosSUFBSSxDQUFNO0lBRTlCLENBQUM7SUFFRCxvQ0FBSSxHQUFKLFVBQUssUUFBZ0I7UUFDakIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksSUFBSSxHQUFHLEVBQUUsa0JBQVEsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBWSxDQUFDLElBQUksR0FBRyx3QkFBd0IsRUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGdCQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCw0Q0FBWSxHQUFaLFVBQWEsZUFBb0IsRUFBRSxhQUFrQixFQUFFLEtBQVU7UUFDaEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFNLENBQUMsR0FBRyxHQUFHLFdBQVcsRUFDeEMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDdEgsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsMENBQVUsR0FBVjtRQUNDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBTSxDQUFDLEdBQUcsR0FBRyxXQUFXLEVBQ3ZDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQXpCRjtRQUFDLGlCQUFVLEVBQUU7OzZCQUFBO0lBMEJiLDRCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsQ0F6QjBDLDBCQUFXLEdBeUJyRDtBQXpCWSw2QkFBcUIsd0JBeUJqQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvYW5ndWxhci1jaGF0LWJvdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tICcuL2NoYXQuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb25maWcgfSBmcm9tICcuL2dsb2JhbC5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhckNoYXRCb3RTZXJ2aWNlIGV4dGVuZHMgQ2hhdFNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHNlbmQocXVlc3Rpb246IHN0cmluZyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuXHQgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdCAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHQgICAgdmFyIGJvZHkgPSB7IHF1ZXN0aW9uIH07XHJcblx0ICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChHbG9iYWxDb25maWcuaG9zdCArICcvYXBpL3YxL21lc3NhZ2Uvc2VhcmNoJyxcclxuXHQgICAgICBKU09OLnN0cmluZ2lmeShib2R5KSwgeyBoZWFkZXJzIH0pO1xyXG5cdH1cclxuXHRzZW5kRmVlZGJhY2sobGlzdE9mUXVlc3Rpb25zOiBhbnksIGxpc3RPZlJlc3VsdHM6IGFueSwgdmFsdWU6IGFueSk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuXHRcdHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHQgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoQ29uZmlnLkFQSSArICcvZmVlZGJhY2snLFxyXG4gICAgICBcdFx0eyBpZDogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMWU5KS50b1N0cmluZygpLCBxdWVzdGlvbnM6IGxpc3RPZlF1ZXN0aW9ucywgYW5zd2VyczogbGlzdE9mUmVzdWx0cywgZmVlbGluZzogdmFsdWUgfSwgXHJcbiAgICAgIFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblx0fVxyXG5cdGdldFJlc3VsdHMoKSB7XHJcblx0XHR2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0ICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoQ29uZmlnLkFQSSArICcvZmVlZGJhY2snLFxyXG4gICAgICBcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbiJdfQ==
