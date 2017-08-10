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
        this.chat = chat;
        this.renderer = renderer;
        this.state = 'inactive';
        this.newName = '';
        this.names = [];
        this.listOfQuestions = [];
        this.listOfResults = [];
        this.links = [];
        this.session = false;
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
                _this.listOfResults.push(_this.result);
                console.log(_this.link);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY2hhdC9jaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBILGVBQWUsQ0FBQyxDQUFBO0FBSTFJLDZCQUE0QixpQkFBaUIsQ0FBQyxDQUFBO0FBeUI5QztJQUdFLHVCQUFvQixJQUFpQixFQUFVLFFBQWtCO1FBQTdDLFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRmpFLFVBQUssR0FBVyxVQUFVLENBQUM7UUFNM0IsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixVQUFLLEdBQVUsRUFBRSxDQUFDO1FBS2xCLG9CQUFlLEdBQWEsRUFBRSxDQUFDO1FBQy9CLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBQzdCLFVBQUssR0FBYSxFQUFFLENBQUM7UUFJckIsWUFBTyxHQUFZLEtBQUssQ0FBQztJQWpCMkMsQ0FBQzs7SUFtQnJFLG1DQUFXLEdBQVgsVUFBWSxLQUFVO1FBQXRCLGlCQTRCQztRQTNCQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0MsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssVUFBVSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdEIsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2lCQUM5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QVMsQ0FBQyxVQUFDLEdBQWEsSUFBTSxLQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBLENBQUEsQ0FBQyxFQUFFLFVBQUMsR0FBUSxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFyRUQ7UUFBQyxnQkFBUyxDQUFDLGNBQWMsQ0FBQzs7Z0VBQUE7SUF4QjVCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFVBQVUsRUFBRTtnQkFDVixjQUFPLENBQUMsTUFBTSxFQUFFO29CQUNkLFlBQUssQ0FBQyxVQUFVLEVBQUUsWUFBSyxDQUFDO3dCQUNwQixTQUFTLEVBQUUsVUFBVTtxQkFDeEIsQ0FBQyxDQUFDO29CQUNILFlBQUssQ0FBQyxRQUFRLEVBQUUsWUFBSyxDQUFDO3dCQUNsQixTQUFTLEVBQUUsMkJBQTJCO3FCQUN6QyxDQUFDLENBQUM7b0JBQ0gsaUJBQVUsQ0FBQyxvQkFBb0IsRUFBRSxjQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQzFELGlCQUFVLENBQUMsb0JBQW9CLEVBQUUsY0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQzdELENBQUM7YUFDSDtZQUNBLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ2xDLENBQUM7O3FCQUFBO0lBNkVGLG9CQUFDO0FBQUQsQ0EzRUEsQUEyRUMsSUFBQTtBQTNFWSxxQkFBYSxnQkEyRXpCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9jaGF0L2NoYXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFJlbmRlcmVyLCBPbkluaXQsIHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwga2V5ZnJhbWVzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgIGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tICcuLi9jaGF0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdjaGF0LWJveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdjaGF0LmNvbXBvbmVudC5odG1sJyxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdpY29uJywgW1xyXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcclxuICAgICAgfSkpLFxyXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoe1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4xKSByb3RhdGUoMzYwZGVnKSdcclxuICAgICAgfSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCcxMDBtcyBlYXNlLWluJykpLFxyXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBhbmltYXRlKCcxMDBtcyBlYXNlLW91dCcpKVxyXG4gICBdKVxyXG4gXSxcclxuICBzdHlsZVVybHM6IFsnY2hhdC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCB7XHJcbiAgc3RhdGU6IHN0cmluZyA9ICdpbmFjdGl2ZSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhdDogQ2hhdFNlcnZpY2UsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udmVyc2F0aW9uJykgY29udmVyc2F0aW9uQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBuZXdOYW1lOiBzdHJpbmcgPSAnJztcclxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICBuYW1lczogYW55W10gPSBbXTtcclxuICBxdWVzdGlvbjogYW55O1xyXG4gIHJlczogYW55O1xyXG4gIHJlc3VsdDphbnk7XHJcbiAgbmV3UXVlc3Rpb246IHN0cmluZztcclxuICBsaXN0T2ZRdWVzdGlvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgbGlzdE9mUmVzdWx0czogc3RyaW5nW10gPSBbXTsgXHJcbiAgbGlua3M6IHN0cmluZ1tdID0gW107XHJcbiAgaGFwcHlTdGF0ZTogc3RyaW5nO1xyXG4gIGV2ZW5TdGF0ZTogc3RyaW5nO1xyXG4gIHNhZFN0YXRlOiBzdHJpbmc7XHJcbiAgc2Vzc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGxpbms6IGFueTtcclxuICBhc2tRdWVzdGlvbih2YWx1ZTogYW55KSB7XHJcbiAgICB2YWx1ZS5uZXdRdWVzdGlvbiA9IHZhbHVlLm5ld1F1ZXN0aW9uLnRyaW0oKTtcclxuICAgIGlmKHZhbHVlLm5ld1F1ZXN0aW9uKSB7IFxyXG4gICAgICB0aGlzLnN0YXRlID0gKHRoaXMuc3RhdGUgPT09ICdpbmFjdGl2ZScgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZScpO1xyXG4gICAgICB0aGlzLmxpc3RPZlF1ZXN0aW9ucy5wdXNoKHRoaXMubmV3UXVlc3Rpb24pO1xyXG4gICAgICB0aGlzLm5ld1F1ZXN0aW9uID0gJyc7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zY3JvbGxCb3R0b20oKSk7XHJcbiAgICAgIHRoaXMuY2hhdC5zZW5kKHZhbHVlLm5ld1F1ZXN0aW9uKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNbJ19ib2R5J10pO1xyXG4gICAgICAgICAgdGhpcy5yZXN1bHQgPSBqc29uLnJlc3BvbnNlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgdmFyIG15UmVnZXhwID0gL2h0dHBzLiokL2c7XHJcbiAgICAgICAgICB0aGlzLmxpbmsgPSBteVJlZ2V4cC5leGVjKHRoaXMucmVzdWx0KTtcclxuXHJcbiAgICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMucmVzdWx0LnJlcGxhY2UoL2h0dHBzLiokL2csIFwiXCIpO1xyXG4gICAgICAgICAgaWYodGhpcy5saW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlua3MucHVzaCh0aGlzLmxpbmspO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5saW5rcy5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5saXN0T2ZSZXN1bHRzLnB1c2godGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5saW5rKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zY3JvbGxCb3R0b20oKSk7XHJcbiAgICAgICAgfSAsIChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTsgdGhpcy5saXN0T2ZSZXN1bHRzLnB1c2goXCJTb3JyeSwgYnV0IHRoZXJlIGlzIGNvbm5lY3Rpb24gcHJvYmxlbS4gVHJ5IGFnYWluIGxhdGVyLlwiKVxyXG4gICAgICB9KTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzY3JvbGxCb3R0b20oKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLmNvbnZlcnNhdGlvbkNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCBcclxuICAgICAgJ3Njcm9sbFRvcCcsIDFlMTApO1xyXG4gIH1cclxuICBnZXRGZWVkYmFjayh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUgPT09ICdoYXBweScpIHtcclxuICAgICAgdGhpcy5oYXBweVN0YXRlID0gJ2FjdGl2ZSc7XHJcbiAgICAgIHRoaXMuZXZlblN0YXRlID0gJ2luYWN0aXZlJztcclxuICAgICAgdGhpcy5zYWRTdGF0ZSA9ICdpbmFjdGl2ZSc7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnZXZlbicpIHtcclxuICAgICAgdGhpcy5oYXBweVN0YXRlID0gJ2luYWN0aXZlJztcclxuICAgICAgdGhpcy5ldmVuU3RhdGUgPSAnYWN0aXZlJztcclxuICAgICAgdGhpcy5zYWRTdGF0ZSA9ICdpbmFjdGl2ZSc7XHJcbiAgICB9IGVsc2UgaWYodmFsdWUgPT09ICdzYWQnKSB7XHJcbiAgICAgIHRoaXMuaGFwcHlTdGF0ZSA9ICdpbmFjdGl2ZSc7XHJcbiAgICAgIHRoaXMuZXZlblN0YXRlID0gJ2luYWN0aXZlJztcclxuICAgICAgdGhpcy5zYWRTdGF0ZSA9ICdhY3RpdmUnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ2luYWN0aXZlJyA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJyk7XHJcbiAgICB0aGlzLmNoYXQuc2VuZEZlZWRiYWNrKHRoaXMubGlzdE9mUXVlc3Rpb25zLCB0aGlzLmxpc3RPZlJlc3VsdHMsIHZhbHVlKVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IFJlc3BvbnNlKSA9PiB7dGhpcy5yZXN1bHQgPSByZXM7IHRoaXMuc2Vzc2lvbiA9IHRydWV9LCAoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH1cclxufVxyXG5cclxuIl19
