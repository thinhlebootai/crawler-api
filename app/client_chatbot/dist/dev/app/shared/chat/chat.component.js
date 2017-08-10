"use strict";
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
var chat_service_1 = require('../chat.service');
var ChatComponent = (function () {
    function ChatComponent(chat, renderer) {
        var _this = this;
        this.chat = chat;
        this.renderer = renderer;
        this.state = 'inactive';
        this.newName = '';
        this.names = [];
        this.listOfQuestions = [];
        this.listOfResults = [];
        this.links = [];
        this.session = false;
        this.options = [];
        this.chat.getCurrentIpLocation().subscribe(function (res) {
            _this.location = res.city;
            _this.ipAdress = res.ip;
        });
    }
    ;
    ChatComponent.prototype.askQuestion = function (value) {
        var _this = this;
        value.newQuestion = value.newQuestion.trim();
        if (value.newQuestion) {
            this.state = (this.state === 'inactive' ? 'active' : 'inactive');
            this.listOfQuestions.push(this.newQuestion);
            this.newQuestion = '';
            setTimeout(function () { return _this.scrollBottom(); });
            this.chat.send(value.newQuestion)
                .subscribe(function (res) {
                var json = JSON.parse(res['_body']);
                _this.result = json.response;
                _this.option = json.options;
                console.log(_this.result);
                var myRegexp = /https.*$/g;
                _this.link = myRegexp.exec(_this.result);
                _this.result = _this.result.replace(/https.*$/g, "");
                if (_this.link) {
                    _this.links.push(_this.link);
                }
                else {
                    _this.links.push(null);
                }
                try {
                    if (_this.option.length > 0) {
                        _this.options.push(_this.option);
                    }
                    else {
                        _this.options.push(null);
                    }
                }
                catch (ex) { }
                _this.listOfResults.push(_this.result);
                setTimeout(function () { return _this.scrollBottom(); });
            }, function (err) {
                console.log(err);
                _this.listOfResults.push("Sorry, but there is connection problem. Try again later.");
            });
        }
    };
    ChatComponent.prototype.sendOptions = function (item) {
        var _this = this;
        if (item) {
            this.state = (this.state === 'inactive' ? 'active' : 'inactive');
            this.listOfQuestions.push(item.value);
            setTimeout(function () { return _this.scrollBottom(); });
            this.chat.send(item.key)
                .subscribe(function (res) {
                var json = JSON.parse(res['_body']);
                _this.result = json.response;
                _this.option = json.options;
                console.log(_this.result);
                var myRegexp = /https.*$/g;
                _this.link = myRegexp.exec(_this.result);
                _this.result = _this.result.replace(/https.*$/g, "");
                if (_this.link) {
                    _this.links.push(_this.link);
                }
                else {
                    _this.links.push(null);
                }
                try {
                    if (_this.option.length > 0) {
                        _this.options.push(_this.option);
                    }
                    else {
                        _this.options.push(null);
                    }
                }
                catch (ex) { }
                _this.listOfResults.push(_this.result);
                setTimeout(function () { return _this.scrollBottom(); });
            }, function (err) {
                console.log(err);
                _this.listOfResults.push("Sorry, but there is connection problem. Try again later.");
            });
        }
    };
    ChatComponent.prototype.scrollBottom = function () {
        this.renderer.setElementProperty(this.conversationContainer.nativeElement, 'scrollTop', 1e10);
    };
    ChatComponent.prototype.getFeedback = function (value) {
        var _this = this;
        if (value === 'happy') {
            this.happyState = 'active';
            this.evenState = 'inactive';
            this.sadState = 'inactive';
        }
        else if (value === 'even') {
            this.happyState = 'inactive';
            this.evenState = 'active';
            this.sadState = 'inactive';
        }
        else if (value === 'sad') {
            this.happyState = 'inactive';
            this.evenState = 'inactive';
            this.sadState = 'active';
        }
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
        this.chat.sendFeedback(this.listOfQuestions, this.listOfResults, value)
            .subscribe(function (res) { _this.result = res; _this.session = true; }, function (err) { return console.log(err); });
    };
    __decorate([
        core_1.ViewChild('conversation'), 
        __metadata('design:type', core_1.ElementRef)
    ], ChatComponent.prototype, "conversationContainer", void 0);
    ChatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chat-box',
            templateUrl: 'chat.component.html',
            animations: [
                core_1.trigger('icon', [
                    core_1.state('inactive', core_1.style({
                        transform: 'scale(1)'
                    })),
                    core_1.state('active', core_1.style({
                        transform: 'scale(1.1) rotate(360deg)'
                    })),
                    core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                    core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
                ])
            ],
            styleUrls: ['chat.component.css'],
        }), 
        __metadata('design:paramtypes', [chat_service_1.ChatService, core_1.Renderer])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY2hhdC9jaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBILGVBQWUsQ0FBQyxDQUFBO0FBSTFJLDZCQUE0QixpQkFBaUIsQ0FBQyxDQUFBO0FBeUI5QztJQXVCRSx1QkFBb0IsSUFBaUIsRUFBVSxRQUFrQjtRQXZCbkUsaUJBK0hDO1FBeEdxQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXRCakUsVUFBSyxHQUFXLFVBQVUsQ0FBQztRQUUzQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLFVBQUssR0FBVSxFQUFFLENBQUM7UUFLbEIsb0JBQWUsR0FBYSxFQUFFLENBQUM7UUFDL0Isa0JBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0IsVUFBSyxHQUFhLEVBQUUsQ0FBQztRQUlyQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFNbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDN0MsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O0lBRUQsbUNBQVcsR0FBWCxVQUFZLEtBQVU7UUFBdEIsaUJBb0NDO1FBbkNDLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxVQUFVLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQ2pFLElBQUks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RUFBRSxjQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDN0QsQ0FBQzthQUNIO1lBQ0EsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDbEMsQ0FBQzs7cUJBQUE7SUFpSUYsb0JBQUM7QUFBRCxDQS9IQSxBQStIQyxJQUFBO0FBL0hZLHFCQUFhLGdCQStIekIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2NoYXQvY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgUmVuZGVyZXIsIE9uSW5pdCwgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBrZXlmcmFtZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGF0U2VydmljZSB9IGZyb20gJy4uL2NoYXQuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2NoYXQtYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJ2NoYXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ2ljb24nLCBbXHJcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xyXG4gICAgICB9KSksXHJcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjEpIHJvdGF0ZSgzNjBkZWcpJ1xyXG4gICAgICB9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIGFuaW1hdGUoJzEwMG1zIGVhc2UtaW4nKSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIGFuaW1hdGUoJzEwMG1zIGVhc2Utb3V0JykpXHJcbiAgIF0pXHJcbiBdLFxyXG4gIHN0eWxlVXJsczogWydjaGF0LmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IHtcclxuICBzdGF0ZTogc3RyaW5nID0gJ2luYWN0aXZlJztcclxuICBAVmlld0NoaWxkKCdjb252ZXJzYXRpb24nKSBjb252ZXJzYXRpb25Db250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgbmV3TmFtZTogc3RyaW5nID0gJyc7XHJcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgbmFtZXM6IGFueVtdID0gW107XHJcbiAgcXVlc3Rpb246IGFueTtcclxuICByZXM6IGFueTtcclxuICByZXN1bHQ6YW55O1xyXG4gIG5ld1F1ZXN0aW9uOiBzdHJpbmc7XHJcbiAgbGlzdE9mUXVlc3Rpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGxpc3RPZlJlc3VsdHM6IHN0cmluZ1tdID0gW107XHJcbiAgbGlua3M6IHN0cmluZ1tdID0gW107XHJcbiAgaGFwcHlTdGF0ZTogc3RyaW5nO1xyXG4gIGV2ZW5TdGF0ZTogc3RyaW5nO1xyXG4gIHNhZFN0YXRlOiBzdHJpbmc7XHJcbiAgc2Vzc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGxpbms6IGFueTtcclxuICBvcHRpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIG9wdGlvbjogYW55O1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgaXBBZHJlc3M6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGF0OiBDaGF0U2VydmljZSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgICAgdGhpcy5jaGF0LmdldEN1cnJlbnRJcExvY2F0aW9uKCkuc3Vic2NyaWJlKChyZXMpPT57XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IHJlcy5jaXR5O1xyXG4gICAgICAgIHRoaXMuaXBBZHJlc3MgPSByZXMuaXA7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGFza1F1ZXN0aW9uKHZhbHVlOiBhbnkpIHtcclxuICAgIHZhbHVlLm5ld1F1ZXN0aW9uID0gdmFsdWUubmV3UXVlc3Rpb24udHJpbSgpO1xyXG4gICAgaWYodmFsdWUubmV3UXVlc3Rpb24pIHsgXHJcbiAgICAgIHRoaXMuc3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ2luYWN0aXZlJyA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMubGlzdE9mUXVlc3Rpb25zLnB1c2godGhpcy5uZXdRdWVzdGlvbik7XHJcbiAgICAgIHRoaXMubmV3UXVlc3Rpb24gPSAnJztcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNjcm9sbEJvdHRvbSgpKTtcclxuICAgICAgdGhpcy5jaGF0LnNlbmQodmFsdWUubmV3UXVlc3Rpb24pXHJcbiAgICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc1snX2JvZHknXSk7XHJcbiAgICAgICAgICB0aGlzLnJlc3VsdCA9IGpzb24ucmVzcG9uc2U7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbiA9IGpzb24ub3B0aW9ucztcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzdWx0KTtcclxuICAgICAgICAgIHZhciBteVJlZ2V4cCA9IC9odHRwcy4qJC9nO1xyXG4gICAgICAgICAgdGhpcy5saW5rID0gbXlSZWdleHAuZXhlYyh0aGlzLnJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLnJlc3VsdC5yZXBsYWNlKC9odHRwcy4qJC9nLCBcIlwiKTtcclxuICAgICAgICAgIGlmKHRoaXMubGluaykge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtzLnB1c2godGhpcy5saW5rKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlua3MucHVzaChudWxsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2godGhpcy5vcHRpb24pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhdGNoIChleCkge31cclxuICAgICAgICAgIHRoaXMubGlzdE9mUmVzdWx0cy5wdXNoKHRoaXMucmVzdWx0KTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zY3JvbGxCb3R0b20oKSk7XHJcbiAgICAgICAgfSAsIChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTsgdGhpcy5saXN0T2ZSZXN1bHRzLnB1c2goXCJTb3JyeSwgYnV0IHRoZXJlIGlzIGNvbm5lY3Rpb24gcHJvYmxlbS4gVHJ5IGFnYWluIGxhdGVyLlwiKVxyXG4gICAgICB9KTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgc2VuZE9wdGlvbnMoaXRlbTogYW55KSB7XHJcbiAgICBpZihpdGVtKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ2luYWN0aXZlJyA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMubGlzdE9mUXVlc3Rpb25zLnB1c2goaXRlbS52YWx1ZSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zY3JvbGxCb3R0b20oKSk7XHJcbiAgICAgIHRoaXMuY2hhdC5zZW5kKGl0ZW0ua2V5KVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNbJ19ib2R5J10pO1xyXG4gICAgICAgICAgdGhpcy5yZXN1bHQgPSBqc29uLnJlc3BvbnNlO1xyXG4gICAgICAgICAgdGhpcy5vcHRpb24gPSBqc29uLm9wdGlvbnM7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdCk7XHJcbiAgICAgICAgICB2YXIgbXlSZWdleHAgPSAvaHR0cHMuKiQvZztcclxuICAgICAgICAgIHRoaXMubGluayA9IG15UmVnZXhwLmV4ZWModGhpcy5yZXN1bHQpO1xyXG5cclxuICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5yZXN1bHQucmVwbGFjZSgvaHR0cHMuKiQvZywgXCJcIik7XHJcbiAgICAgICAgICBpZih0aGlzLmxpbmspIHtcclxuICAgICAgICAgICAgdGhpcy5saW5rcy5wdXNoKHRoaXMubGluayk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtzLnB1c2gobnVsbCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKHRoaXMub3B0aW9uKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucHVzaChudWxsKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXRjaCAoZXgpIHt9XHJcbiAgICAgICAgICB0aGlzLmxpc3RPZlJlc3VsdHMucHVzaCh0aGlzLnJlc3VsdCk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2Nyb2xsQm90dG9tKCkpO1xyXG4gICAgICAgIH0gLCAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7IHRoaXMubGlzdE9mUmVzdWx0cy5wdXNoKFwiU29ycnksIGJ1dCB0aGVyZSBpcyBjb25uZWN0aW9uIHByb2JsZW0uIFRyeSBhZ2FpbiBsYXRlci5cIilcclxuICAgICAgfSk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2Nyb2xsQm90dG9tKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5jb252ZXJzYXRpb25Db250YWluZXIubmF0aXZlRWxlbWVudCwgXHJcbiAgICAgICdzY3JvbGxUb3AnLCAxZTEwKTtcclxuICB9XHJcbiAgZ2V0RmVlZGJhY2sodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlID09PSAnaGFwcHknKSB7XHJcbiAgICAgIHRoaXMuaGFwcHlTdGF0ZSA9ICdhY3RpdmUnO1xyXG4gICAgICB0aGlzLmV2ZW5TdGF0ZSA9ICdpbmFjdGl2ZSc7XHJcbiAgICAgIHRoaXMuc2FkU3RhdGUgPSAnaW5hY3RpdmUnO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2V2ZW4nKSB7XHJcbiAgICAgIHRoaXMuaGFwcHlTdGF0ZSA9ICdpbmFjdGl2ZSc7XHJcbiAgICAgIHRoaXMuZXZlblN0YXRlID0gJ2FjdGl2ZSc7XHJcbiAgICAgIHRoaXMuc2FkU3RhdGUgPSAnaW5hY3RpdmUnO1xyXG4gICAgfSBlbHNlIGlmKHZhbHVlID09PSAnc2FkJykge1xyXG4gICAgICB0aGlzLmhhcHB5U3RhdGUgPSAnaW5hY3RpdmUnO1xyXG4gICAgICB0aGlzLmV2ZW5TdGF0ZSA9ICdpbmFjdGl2ZSc7XHJcbiAgICAgIHRoaXMuc2FkU3RhdGUgPSAnYWN0aXZlJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXRlID0gKHRoaXMuc3RhdGUgPT09ICdpbmFjdGl2ZScgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZScpO1xyXG4gICAgdGhpcy5jaGF0LnNlbmRGZWVkYmFjayh0aGlzLmxpc3RPZlF1ZXN0aW9ucywgdGhpcy5saXN0T2ZSZXN1bHRzLCB2YWx1ZSlcclxuICAgICAgLnN1YnNjcmliZSgocmVzOiBSZXNwb25zZSkgPT4ge3RoaXMucmVzdWx0ID0gcmVzOyB0aGlzLnNlc3Npb24gPSB0cnVlfSwgKGVycjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
