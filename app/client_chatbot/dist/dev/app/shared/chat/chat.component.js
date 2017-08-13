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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY2hhdC9jaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBILGVBQWUsQ0FBQyxDQUFBO0FBSTFJLDZCQUE0QixpQkFBaUIsQ0FBQyxDQUFBO0FBeUI5QztJQXdCRSx1QkFBb0IsSUFBaUIsRUFBVSxRQUFrQjtRQXhCbkUsaUJBd0lDO1FBaEhxQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXZCakUsVUFBSyxHQUFXLFVBQVUsQ0FBQztRQUUzQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLFVBQUssR0FBVSxFQUFFLENBQUM7UUFLbEIsb0JBQWUsR0FBYSxFQUFFLENBQUM7UUFDL0Isa0JBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0IsVUFBSyxHQUFhLEVBQUUsQ0FBQztRQUlyQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFPbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDN0MsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQ3pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMzQixLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDOztJQUVELG1DQUFXLEdBQVgsVUFBWSxLQUFVO1FBQXRCLGlCQXVDQztRQXRDQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0MsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssVUFBVSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdEIsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2lCQUNyQyxTQUFTLENBQUMsVUFBQyxJQUFTO2dCQUNuQixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pCLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkMsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNyQixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDbkQsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2IsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QixDQUFDO29CQUNELElBQUksQ0FBQzt3QkFDRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN6QixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ25DLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ0osS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzVCLENBQUM7b0JBQ0wsQ0FDQTtvQkFBQSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDakIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixLQUFJLENBQUMsTUFBTSxHQUFHLHlCQUF5QixDQUFBO2dCQUMzQyxDQUFDO2dCQUVELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQztZQUN4QyxDQUFDLEVBQUcsVUFBQyxHQUFRO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsMERBQTBELENBQUMsQ0FBQTtZQUN6RyxDQUFDLENBQUMsQ0FBQztRQUNILENBQUM7SUFDTCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLElBQVM7UUFBckIsaUJBa0NDO1FBakNDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxVQUFVLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QyxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7aUJBQ3JCLFNBQVMsQ0FBQyxVQUFDLEdBQVE7Z0JBQ2xCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekIsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDO2dCQUMzQixLQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUV2QyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbkQsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2IsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUNELElBQUksQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ25DLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzVCLENBQUM7Z0JBQ0wsQ0FDQTtnQkFBQSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDYixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQUM7WUFDeEMsQ0FBQyxFQUFHLFVBQUMsR0FBUTtnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLDBEQUEwRCxDQUFDLENBQUE7WUFDekcsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDO0lBQ0wsQ0FBQztJQUVPLG9DQUFZLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxFQUN2RSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNELG1DQUFXLEdBQVgsVUFBWSxLQUFhO1FBQXpCLGlCQWtCQztRQWpCQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUM3QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzdCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDM0IsQ0FBQztRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFVBQVUsR0FBRyxRQUFRLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQzthQUNwRSxTQUFTLENBQUMsVUFBQyxHQUFhLElBQU0sS0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQSxDQUFBLENBQUMsRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBcklEO1FBQUMsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7O2dFQUFBO0lBckI1QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxVQUFVLEVBQUU7Z0JBQ1YsY0FBTyxDQUFDLE1BQU0sRUFBRTtvQkFDZCxZQUFLLENBQUMsVUFBVSxFQUFFLFlBQUssQ0FBQzt3QkFDcEIsU0FBUyxFQUFFLFVBQVU7cUJBQ3hCLENBQUMsQ0FBQztvQkFDSCxZQUFLLENBQUMsUUFBUSxFQUFFLFlBQUssQ0FBQzt3QkFDbEIsU0FBUyxFQUFFLDJCQUEyQjtxQkFDekMsQ0FBQyxDQUFDO29CQUNILGlCQUFVLENBQUMsb0JBQW9CLEVBQUUsY0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUMxRCxpQkFBVSxDQUFDLG9CQUFvQixFQUFFLGNBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUM3RCxDQUFDO2FBQ0g7WUFDQSxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDOztxQkFBQTtJQTBJRixvQkFBQztBQUFELENBeElBLEFBd0lDLElBQUE7QUF4SVkscUJBQWEsZ0JBd0l6QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY2hhdC9jaGF0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBSZW5kZXJlciwgT25Jbml0LCB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIGtleWZyYW1lcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnY2hhdC1ib3gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnY2hhdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcignaWNvbicsIFtcclxuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXHJcbiAgICAgIH0pKSxcclxuICAgICAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMSkgcm90YXRlKDM2MGRlZyknXHJcbiAgICAgIH0pKSxcclxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgYW5pbWF0ZSgnMTAwbXMgZWFzZS1pbicpKSxcclxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgYW5pbWF0ZSgnMTAwbXMgZWFzZS1vdXQnKSlcclxuICAgXSlcclxuIF0sXHJcbiAgc3R5bGVVcmxzOiBbJ2NoYXQuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYXRDb21wb25lbnQge1xyXG4gIHN0YXRlOiBzdHJpbmcgPSAnaW5hY3RpdmUnO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnZlcnNhdGlvbicpIGNvbnZlcnNhdGlvbkNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBuZXdOYW1lOiBzdHJpbmcgPSAnJztcclxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICBuYW1lczogYW55W10gPSBbXTtcclxuICBxdWVzdGlvbjogYW55O1xyXG4gIHJlczogYW55O1xyXG4gIHJlc3VsdDphbnk7XHJcbiAgbmV3UXVlc3Rpb246IHN0cmluZztcclxuICBsaXN0T2ZRdWVzdGlvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgbGlzdE9mUmVzdWx0czogc3RyaW5nW10gPSBbXTtcclxuICBsaW5rczogc3RyaW5nW10gPSBbXTtcclxuICBoYXBweVN0YXRlOiBzdHJpbmc7XHJcbiAgZXZlblN0YXRlOiBzdHJpbmc7XHJcbiAgc2FkU3RhdGU6IHN0cmluZztcclxuICBzZXNzaW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgbGluazogYW55O1xyXG4gIG9wdGlvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgb3B0aW9uOiBhbnk7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxuICBpcEFkcmVzczogc3RyaW5nO1xyXG4gIGluaXRNc2c6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGF0OiBDaGF0U2VydmljZSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgICAgdGhpcy5jaGF0LmdldEN1cnJlbnRJcExvY2F0aW9uKCkuc3Vic2NyaWJlKChyZXMpPT57XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IHJlcy5jaXR5O1xyXG4gICAgICAgIHRoaXMuaXBBZHJlc3MgPSByZXMuaXA7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNoYXQuaW5pdCh0aGlzLmxvY2F0aW9uKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICB0aGlzLmluaXRNc2cgPSByZXMubWVzc2FnZTtcclxuICAgICAgICAgdGhpcy5jaGF0LnNldENvbnZlcklEKHJlcy5jb252ZXJzYXRpb25faWQpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgfTtcclxuXHJcbiAgYXNrUXVlc3Rpb24odmFsdWU6IGFueSkge1xyXG4gICAgdmFsdWUubmV3UXVlc3Rpb24gPSB2YWx1ZS5uZXdRdWVzdGlvbi50cmltKCk7XHJcbiAgICBpZih2YWx1ZS5uZXdRdWVzdGlvbikgeyBcclxuICAgICAgdGhpcy5zdGF0ZSA9ICh0aGlzLnN0YXRlID09PSAnaW5hY3RpdmUnID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnKTtcclxuICAgICAgdGhpcy5saXN0T2ZRdWVzdGlvbnMucHVzaCh0aGlzLm5ld1F1ZXN0aW9uKTtcclxuICAgICAgdGhpcy5uZXdRdWVzdGlvbiA9ICcnO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2Nyb2xsQm90dG9tKCkpO1xyXG4gICAgICB0aGlzLmNoYXQuc2VuZE1lc3NhZ2UodmFsdWUubmV3UXVlc3Rpb24pXHJcbiAgICAgICAgLnN1YnNjcmliZSgoanNvbjogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlc3VsdCA9IGpzb24ubWVzc2FnZTtcclxuICAgICAgICAgIHRoaXMub3B0aW9uID0ganNvbi5vcHRpb25zO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgdmFyIG15UmVnZXhwID0gL2h0dHBzLiokL2c7XHJcbiAgICAgICAgICB0aGlzLmxpbmsgPSBteVJlZ2V4cC5leGVjKHRoaXMucmVzdWx0KTtcclxuICAgICAgICAgIGlmICh0aGlzLnJlc3VsdCAhPT0gJycpIHtcclxuICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMucmVzdWx0LnJlcGxhY2UoL2h0dHBzLiokL2csIFwiXCIpO1xyXG4gICAgICAgICAgICAgIGlmKHRoaXMubGluaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5rcy5wdXNoKHRoaXMubGluayk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlua3MucHVzaChudWxsKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKHRoaXMub3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNhdGNoIChleCkge31cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSAnaSBjYW5cXCd0IHVuZGVyc3RhbmQgeW91J1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMubGlzdE9mUmVzdWx0cy5wdXNoKHRoaXMucmVzdWx0KTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zY3JvbGxCb3R0b20oKSk7XHJcbiAgICAgICAgfSAsIChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTsgdGhpcy5saXN0T2ZSZXN1bHRzLnB1c2goXCJTb3JyeSwgYnV0IHRoZXJlIGlzIGNvbm5lY3Rpb24gcHJvYmxlbS4gVHJ5IGFnYWluIGxhdGVyLlwiKVxyXG4gICAgICB9KTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgc2VuZE9wdGlvbnMoaXRlbTogYW55KSB7XHJcbiAgICBpZihpdGVtKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ2luYWN0aXZlJyA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMubGlzdE9mUXVlc3Rpb25zLnB1c2goaXRlbS52YWx1ZSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zY3JvbGxCb3R0b20oKSk7XHJcbiAgICAgIHRoaXMuY2hhdC5zZW5kKGl0ZW0ua2V5KVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNbJ19ib2R5J10pO1xyXG4gICAgICAgICAgdGhpcy5yZXN1bHQgPSBqc29uLnJlc3BvbnNlO1xyXG4gICAgICAgICAgdGhpcy5vcHRpb24gPSBqc29uLm9wdGlvbnM7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdCk7XHJcbiAgICAgICAgICB2YXIgbXlSZWdleHAgPSAvaHR0cHMuKiQvZztcclxuICAgICAgICAgIHRoaXMubGluayA9IG15UmVnZXhwLmV4ZWModGhpcy5yZXN1bHQpO1xyXG5cclxuICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5yZXN1bHQucmVwbGFjZSgvaHR0cHMuKiQvZywgXCJcIik7XHJcbiAgICAgICAgICBpZih0aGlzLmxpbmspIHtcclxuICAgICAgICAgICAgdGhpcy5saW5rcy5wdXNoKHRoaXMubGluayk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtzLnB1c2gobnVsbCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKHRoaXMub3B0aW9uKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucHVzaChudWxsKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXRjaCAoZXgpIHt9XHJcbiAgICAgICAgICB0aGlzLmxpc3RPZlJlc3VsdHMucHVzaCh0aGlzLnJlc3VsdCk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2Nyb2xsQm90dG9tKCkpO1xyXG4gICAgICAgIH0gLCAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7IHRoaXMubGlzdE9mUmVzdWx0cy5wdXNoKFwiU29ycnksIGJ1dCB0aGVyZSBpcyBjb25uZWN0aW9uIHByb2JsZW0uIFRyeSBhZ2FpbiBsYXRlci5cIilcclxuICAgICAgfSk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2Nyb2xsQm90dG9tKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5jb252ZXJzYXRpb25Db250YWluZXIubmF0aXZlRWxlbWVudCwgXHJcbiAgICAgICdzY3JvbGxUb3AnLCAxZTEwKTtcclxuICB9XHJcbiAgZ2V0RmVlZGJhY2sodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlID09PSAnaGFwcHknKSB7XHJcbiAgICAgIHRoaXMuaGFwcHlTdGF0ZSA9ICdhY3RpdmUnO1xyXG4gICAgICB0aGlzLmV2ZW5TdGF0ZSA9ICdpbmFjdGl2ZSc7XHJcbiAgICAgIHRoaXMuc2FkU3RhdGUgPSAnaW5hY3RpdmUnO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2V2ZW4nKSB7XHJcbiAgICAgIHRoaXMuaGFwcHlTdGF0ZSA9ICdpbmFjdGl2ZSc7XHJcbiAgICAgIHRoaXMuZXZlblN0YXRlID0gJ2FjdGl2ZSc7XHJcbiAgICAgIHRoaXMuc2FkU3RhdGUgPSAnaW5hY3RpdmUnO1xyXG4gICAgfSBlbHNlIGlmKHZhbHVlID09PSAnc2FkJykge1xyXG4gICAgICB0aGlzLmhhcHB5U3RhdGUgPSAnaW5hY3RpdmUnO1xyXG4gICAgICB0aGlzLmV2ZW5TdGF0ZSA9ICdpbmFjdGl2ZSc7XHJcbiAgICAgIHRoaXMuc2FkU3RhdGUgPSAnYWN0aXZlJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXRlID0gKHRoaXMuc3RhdGUgPT09ICdpbmFjdGl2ZScgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZScpO1xyXG4gICAgdGhpcy5jaGF0LnNlbmRGZWVkYmFjayh0aGlzLmxpc3RPZlF1ZXN0aW9ucywgdGhpcy5saXN0T2ZSZXN1bHRzLCB2YWx1ZSlcclxuICAgICAgLnN1YnNjcmliZSgocmVzOiBSZXNwb25zZSkgPT4ge3RoaXMucmVzdWx0ID0gcmVzOyB0aGlzLnNlc3Npb24gPSB0cnVlfSwgKGVycjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
