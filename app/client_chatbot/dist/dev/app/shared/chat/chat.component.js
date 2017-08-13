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
var core_1 = require("@angular/core");
var chat_service_1 = require("../chat.service");
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
        this.chat.init(this.location).subscribe(function (res) {
            _this.initMsg = res.message;
            _this.chat.setConverID(res.conversation_id);
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
            this.chat.sendMessage(value.newQuestion)
                .subscribe(function (json) {
                _this.result = json.message;
                _this.chat.setConverID(json.conversation_id);
                _this.option = json.options;
                console.log(_this.result);
                var myRegexp = /https.*$/g;
                _this.link = myRegexp.exec(_this.result);
                if (_this.result !== '') {
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
                }
                else {
                    _this.result = 'i can\'t understand you';
                }
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
    ChatComponent.prototype.getUserId = function () {
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
    return ChatComponent;
}());
__decorate([
    core_1.ViewChild('conversation'),
    __metadata("design:type", core_1.ElementRef)
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
    __metadata("design:paramtypes", [chat_service_1.ChatService, core_1.Renderer])
], ChatComponent);
exports.ChatComponent = ChatComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY2hhdC9jaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQTBJO0FBSTFJLGdEQUE4QztBQXlCOUMsSUFBYSxhQUFhO0lBd0J4Qix1QkFBb0IsSUFBaUIsRUFBVSxRQUFrQjtRQUFqRSxpQkFVQztRQVZtQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXZCakUsVUFBSyxHQUFXLFVBQVUsQ0FBQztRQUUzQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLFVBQUssR0FBVSxFQUFFLENBQUM7UUFLbEIsb0JBQWUsR0FBYSxFQUFFLENBQUM7UUFDL0Isa0JBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0IsVUFBSyxHQUFhLEVBQUUsQ0FBQztRQUlyQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFPbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDN0MsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQ3pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMzQixLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBQUEsQ0FBQztJQUVGLG1DQUFXLEdBQVgsVUFBWSxLQUFVO1FBQXRCLGlCQXdDQztRQXZDQyxLQUFLLENBQUMs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QUMsY0FBYyxDQUFDOzhCQUF3QixpQkFBVTs0REFBQztBQUZsRCxhQUFhO0lBbkJ6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsVUFBVSxFQUFFO1lBQ1YsY0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDZCxZQUFLLENBQUMsVUFBVSxFQUFFLFlBQUssQ0FBQztvQkFDcEIsU0FBUyxFQUFFLFVBQVU7aUJBQ3hCLENBQUMsQ0FBQztnQkFDSCxZQUFLLENBQUMsUUFBUSxFQUFFLFlBQUssQ0FBQztvQkFDbEIsU0FBUyxFQUFFLDJCQUEyQjtpQkFDekMsQ0FBQyxDQUFDO2dCQUNILGlCQUFVLENBQUMsb0JBQW9CLEVBQUUsY0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUMxRCxpQkFBVSxDQUFDLG9CQUFvQixFQUFFLGNBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQzdELENBQUM7U0FDSDtRQUNBLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0tBQ2xDLENBQUM7cUNBMEIwQiwwQkFBVyxFQUFvQixlQUFRO0dBeEJ0RCxhQUFhLENBNkl6QjtBQTdJWSxzQ0FBYSIsImZpbGUiOiJhcHAvc2hhcmVkL2NoYXQvY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgUmVuZGVyZXIsIE9uSW5pdCwgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBrZXlmcmFtZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGF0U2VydmljZSB9IGZyb20gJy4uL2NoYXQuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2NoYXQtYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJ2NoYXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ2ljb24nLCBbXHJcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xyXG4gICAgICB9KSksXHJcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjEpIHJvdGF0ZSgzNjBkZWcpJ1xyXG4gICAgICB9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIGFuaW1hdGUoJzEwMG1zIGVhc2UtaW4nKSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIGFuaW1hdGUoJzEwMG1zIGVhc2Utb3V0JykpXHJcbiAgIF0pXHJcbiBdLFxyXG4gIHN0eWxlVXJsczogWydjaGF0LmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IHtcclxuICBzdGF0ZTogc3RyaW5nID0gJ2luYWN0aXZlJztcclxuICBAVmlld0NoaWxkKCdjb252ZXJzYXRpb24nKSBjb252ZXJzYXRpb25Db250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgbmV3TmFtZTogc3RyaW5nID0gJyc7XHJcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgbmFtZXM6IGFueVtdID0gW107XHJcbiAgcXVlc3Rpb246IGFueTtcclxuICByZXM6IGFueTtcclxuICByZXN1bHQ6YW55O1xyXG4gIG5ld1F1ZXN0aW9uOiBzdHJpbmc7XHJcbiAgbGlzdE9mUXVlc3Rpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGxpc3RPZlJlc3VsdHM6IHN0cmluZ1tdID0gW107XHJcbiAgbGlua3M6IHN0cmluZ1tdID0gW107XHJcbiAgaGFwcHlTdGF0ZTogc3RyaW5nO1xyXG4gIGV2ZW5TdGF0ZTogc3RyaW5nO1xyXG4gIHNhZFN0YXRlOiBzdHJpbmc7XHJcbiAgc2Vzc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGxpbms6IGFueTtcclxuICBvcHRpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIG9wdGlvbjogYW55O1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgaXBBZHJlc3M6IHN0cmluZztcclxuICBpbml0TXNnOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhdDogQ2hhdFNlcnZpY2UsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcbiAgICAgIHRoaXMuY2hhdC5nZXRDdXJyZW50SXBMb2NhdGlvbigpLnN1YnNjcmliZSgocmVzKT0+e1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSByZXMuY2l0eTtcclxuICAgICAgICB0aGlzLmlwQWRyZXNzID0gcmVzLmlwO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jaGF0LmluaXQodGhpcy5sb2NhdGlvbikuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuICAgICAgICAgdGhpcy5pbml0TXNnID0gcmVzLm1lc3NhZ2U7XHJcbiAgICAgICAgIHRoaXMuY2hhdC5zZXRDb252ZXJJRChyZXMuY29udmVyc2F0aW9uX2lkKTtcclxuICAgICAgfSk7XHJcblxyXG4gIH07XHJcblxyXG4gIGFza1F1ZXN0aW9uKHZhbHVlOiBhbnkpIHtcclxuICAgIHZhbHVlLm5ld1F1ZXN0aW9uID0gdmFsdWUubmV3UXVlc3Rpb24udHJpbSgpO1xyXG4gICAgaWYodmFsdWUubmV3UXVlc3Rpb24pIHsgXHJcbiAgICAgIHRoaXMuc3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ2luYWN0aXZlJyA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMubGlzdE9mUXVlc3Rpb25zLnB1c2godGhpcy5uZXdRdWVzdGlvbik7XHJcbiAgICAgIHRoaXMubmV3UXVlc3Rpb24gPSAnJztcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNjcm9sbEJvdHRvbSgpKTtcclxuICAgICAgdGhpcy5jaGF0LnNlbmRNZXNzYWdlKHZhbHVlLm5ld1F1ZXN0aW9uKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGpzb246IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZXN1bHQgPSBqc29uLm1lc3NhZ2U7XHJcbiAgICAgICAgICB0aGlzLmNoYXQuc2V0Q29udmVySUQoanNvbi5jb252ZXJzYXRpb25faWQpO1xyXG4gICAgICAgICAgdGhpcy5vcHRpb24gPSBqc29uLm9wdGlvbnM7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdCk7XHJcbiAgICAgICAgICB2YXIgbXlSZWdleHAgPSAvaHR0cHMuKiQvZztcclxuICAgICAgICAgIHRoaXMubGluayA9IG15UmVnZXhwLmV4ZWModGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucmVzdWx0ICE9PSAnJykge1xyXG4gICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5yZXN1bHQucmVwbGFjZSgvaHR0cHMuKiQvZywgXCJcIik7XHJcbiAgICAgICAgICAgICAgaWYodGhpcy5saW5rKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmtzLnB1c2godGhpcy5saW5rKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5rcy5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2godGhpcy5vcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2gobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY2F0Y2ggKGV4KSB7fVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9ICdpIGNhblxcJ3QgdW5kZXJzdGFuZCB5b3UnXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5saXN0T2ZSZXN1bHRzLnB1c2godGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNjcm9sbEJvdHRvbSgpKTtcclxuICAgICAgICB9ICwgKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpOyB0aGlzLmxpc3RPZlJlc3VsdHMucHVzaChcIlNvcnJ5LCBidXQgdGhlcmUgaXMgY29ubmVjdGlvbiBwcm9ibGVtLiBUcnkgYWdhaW4gbGF0ZXIuXCIpXHJcbiAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBzZW5kT3B0aW9ucyhpdGVtOiBhbnkpIHtcclxuICAgIGlmKGl0ZW0pIHtcclxuICAgICAgdGhpcy5zdGF0ZSA9ICh0aGlzLnN0YXRlID09PSAnaW5hY3RpdmUnID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnKTtcclxuICAgICAgdGhpcy5saXN0T2ZRdWVzdGlvbnMucHVzaChpdGVtLnZhbHVlKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNjcm9sbEJvdHRvbSgpKTtcclxuICAgICAgdGhpcy5jaGF0LnNlbmQoaXRlbS5rZXkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc1snX2JvZHknXSk7XHJcbiAgICAgICAgICB0aGlzLnJlc3VsdCA9IGpzb24ucmVzcG9uc2U7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbiA9IGpzb24ub3B0aW9ucztcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzdWx0KTtcclxuICAgICAgICAgIHZhciBteVJlZ2V4cCA9IC9odHRwcy4qJC9nO1xyXG4gICAgICAgICAgdGhpcy5saW5rID0gbXlSZWdleHAuZXhlYyh0aGlzLnJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLnJlc3VsdC5yZXBsYWNlKC9odHRwcy4qJC9nLCBcIlwiKTtcclxuICAgICAgICAgIGlmKHRoaXMubGluaykge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtzLnB1c2godGhpcy5saW5rKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlua3MucHVzaChudWxsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2godGhpcy5vcHRpb24pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhdGNoIChleCkge31cclxuICAgICAgICAgIHRoaXMubGlzdE9mUmVzdWx0cy5wdXNoKHRoaXMucmVzdWx0KTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zY3JvbGxCb3R0b20oKSk7XHJcbiAgICAgICAgfSAsIChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTsgdGhpcy5saXN0T2ZSZXN1bHRzLnB1c2goXCJTb3JyeSwgYnV0IHRoZXJlIGlzIGNvbm5lY3Rpb24gcHJvYmxlbS4gVHJ5IGFnYWluIGxhdGVyLlwiKVxyXG4gICAgICB9KTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFVzZXJJZCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNjcm9sbEJvdHRvbSgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuY29udmVyc2F0aW9uQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIFxyXG4gICAgICAnc2Nyb2xsVG9wJywgMWUxMCk7XHJcbiAgfVxyXG4gIGdldEZlZWRiYWNrKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gJ2hhcHB5Jykge1xyXG4gICAgICB0aGlzLmhhcHB5U3RhdGUgPSAnYWN0aXZlJztcclxuICAgICAgdGhpcy5ldmVuU3RhdGUgPSAnaW5hY3RpdmUnO1xyXG4gICAgICB0aGlzLnNhZFN0YXRlID0gJ2luYWN0aXZlJztcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdldmVuJykge1xyXG4gICAgICB0aGlzLmhhcHB5U3RhdGUgPSAnaW5hY3RpdmUnO1xyXG4gICAgICB0aGlzLmV2ZW5TdGF0ZSA9ICdhY3RpdmUnO1xyXG4gICAgICB0aGlzLnNhZFN0YXRlID0gJ2luYWN0aXZlJztcclxuICAgIH0gZWxzZSBpZih2YWx1ZSA9PT0gJ3NhZCcpIHtcclxuICAgICAgdGhpcy5oYXBweVN0YXRlID0gJ2luYWN0aXZlJztcclxuICAgICAgdGhpcy5ldmVuU3RhdGUgPSAnaW5hY3RpdmUnO1xyXG4gICAgICB0aGlzLnNhZFN0YXRlID0gJ2FjdGl2ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9ICh0aGlzLnN0YXRlID09PSAnaW5hY3RpdmUnID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnKTtcclxuICAgIHRoaXMuY2hhdC5zZW5kRmVlZGJhY2sodGhpcy5saXN0T2ZRdWVzdGlvbnMsIHRoaXMubGlzdE9mUmVzdWx0cywgdmFsdWUpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogUmVzcG9uc2UpID0+IHt0aGlzLnJlc3VsdCA9IHJlczsgdGhpcy5zZXNzaW9uID0gdHJ1ZX0sIChlcnI6IGFueSkgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=
