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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var chat_service_1 = require("./chat.service");
var index_1 = require("./index");
var global_config_1 = require("./global.config");
var AngularChatBotService = (function (_super) {
    __extends(AngularChatBotService, _super);
    function AngularChatBotService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
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
        return this.http.post('https://zenzai.synapse.boot.ai/api/v1', JSON.stringify({ "user_id": 25, "message": "BMI", "location": location }), { headers: headers })
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
    return AngularChatBotService;
}(chat_service_1.ChatService));
AngularChatBotService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AngularChatBotService);
exports.AngularChatBotService = AngularChatBotService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYW5ndWxhci1jaGF0LWJvdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOENBQTZDO0FBQzdDLCtDQUE2QztBQUM3QyxpQ0FBaUM7QUFDakMsaURBQStDO0FBRy9DLElBQWEscUJBQXFCO0lBQVMseUNBQVc7SUFFckQsK0JBQW9CLElBQVU7UUFBOUIsWUFDQyxpQkFBTyxTQUNQO1FBRm1CLFVBQUksR0FBSixJQUFJLENBQU07O0lBRTlCLENBQUM7SUFFRCxvQ0FBSSxHQUFKLFVBQUssUUFBZ0I7UUFDakIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksSUFBSSxHQUFHLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQVksQ0FBQyxJQUFJLEdBQUcsd0JBQXdCLEVBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELDRDQUFZLEdBQVosVUFBYSxlQUFvQixFQUFFLGFBQWtCLEVBQUUsS0FBVTtRQUNoRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQU0sQ0FBQyxHQUFHLEdBQUcsV0FBVyxFQUN4QyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMs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LEVBQUUsQ0FBQztRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLDRCQUFDO0FBQUQsQ0FsRUEsQUFrRUMsQ0FsRTBDLDBCQUFXLEdBa0VyRDtBQWxFWSxxQkFBcUI7SUFEakMsaUJBQVUsRUFBRTtxQ0FHYyxXQUFJO0dBRmxCLHFCQUFxQixDQWtFakM7QUFsRVksc0RBQXFCIiwiZmlsZSI6ImFwcC9zaGFyZWQvYW5ndWxhci1jaGF0LWJvdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tICcuL2NoYXQuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb25maWcgfSBmcm9tICcuL2dsb2JhbC5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhckNoYXRCb3RTZXJ2aWNlIGV4dGVuZHMgQ2hhdFNlcnZpY2Uge1xyXG5cdGNvbnZlcklkOiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0c2VuZChxdWVzdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG5cdCAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0ICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cdCAgICB2YXIgYm9keSA9IHsgcXVlc3Rpb24gfTtcclxuXHQgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEdsb2JhbENvbmZpZy5ob3N0ICsgJy9hcGkvdjEvbWVzc2FnZS9zZWFyY2gnLFxyXG5cdCAgICAgIEpTT04uc3RyaW5naWZ5KGJvZHkpLCB7IGhlYWRlcnMgfSk7XHJcblx0fVxyXG5cdHNlbmRGZWVkYmFjayhsaXN0T2ZRdWVzdGlvbnM6IGFueSwgbGlzdE9mUmVzdWx0czogYW55LCB2YWx1ZTogYW55KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG5cdFx0dmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdCAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChDb25maWcuQVBJICsgJy9mZWVkYmFjaycsXHJcbiAgICAgIFx0XHR7IGlkOiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTkpLnRvU3RyaW5nKCksIHF1ZXN0aW9uczogbGlzdE9mUXVlc3Rpb25zLCBhbnN3ZXJzOiBsaXN0T2ZSZXN1bHRzLCBmZWVsaW5nOiB2YWx1ZSB9LCBcclxuICAgICAgXHRcdHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHR9XHJcblx0Z2V0UmVzdWx0cygpIHtcclxuXHRcdHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHQgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChDb25maWcuQVBJICsgJy9mZWVkYmFjaycsXHJcbiAgICAgIFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblx0fVxyXG5cclxuXHQgcHVibGljIGdldEN1cnJlbnRJcExvY2F0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHBzOi8vaXBpbmZvLmlvL2pzb24nKVxyXG4gICAgICAgIC5tYXAoKHJlcyk6IFJlc3BvbnNlID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KGxvY2F0aW9uOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0dmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblx0XHQgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwczovL3plbnphaS5zeW5hcHNlLmJvb3QuYWkvYXBpL3YxJyxcclxuXHRcdFx0IEpTT04uc3RyaW5naWZ5KHtcInVzZXJfaWRcIjoyNSwgXCJtZXNzYWdlXCI6XCJCTUlcIiwgXCJsb2NhdGlvblwiOiBsb2NhdGlvbn0pLFxyXG5cdFx0XHQge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAoKHJlcyk6IFJlc3BvbnNlID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpO1xyXG4gICAgICAgIH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNlbmRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHR2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHRcdCByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vemVuemFpLnN5bmFwc2UuYm9vdC5haS9hcGkvdjEnLFxyXG5cdFx0XHQgSlNPTi5zdHJpbmdpZnkoe1wiY29udmVyc2F0aW9uX2lkXCI6IHRoaXMuY29udmVySWQsIFwibWVzc2FnZVwiOm1lc3NhZ2V9KSxcclxuXHRcdFx0IHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICAubWFwKChyZXMpOiBSZXNwb25zZSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKTtcclxuICAgICAgICB9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRDb252ZXJJRChpZDogc3RyaW5nKTogYm9vbGVhbntcclxuXHRcdHRoaXMuY29udmVySWQgPSBpZDtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbiJdfQ==
