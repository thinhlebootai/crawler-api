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
var chat_service_1 = require("../shared/chat.service");
var AboutComponent = (function () {
    function AboutComponent(chat, renderer) {
        this.chat = chat;
        this.renderer = renderer;
        this.state = 'inactive';
    }
    ;
    AboutComponent.prototype.results = function () {
    };
    AboutComponent.prototype.enlarge = function () {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-about',
        templateUrl: 'about.component.html',
        styleUrls: ['about.component.css'],
        animations: [
            core_1.trigger('icon', [
                core_1.state('inactive', core_1.style({
                    transform: 'scale(1)',
                })),
                core_1.state('active', core_1.style({
                    transform: 'scale(1.3) rotate(360deg)',
                })),
                core_1.transition('inactive => active', core_1.animate('500ms ease-in', core_1.style({ background: "red" }))),
                core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService, core_1.Renderer])
], AboutComponent);
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFtSDtBQUVuSCx1REFBcUQ7QUFzQnJELElBQWEsY0FBYztJQUl6Qix3QkFBb0IsSUFBaUIsRUFBVSxRQUFrQjtRQUE3QyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUhsRSxVQUFLLEdBQVcsVUFBVSxDQUFDO0lBRzJDLENBQUM7SUFBQSxDQUFDO0lBRXZFLGdDQUFPLEdBQVA7SUFJQSxDQUFDO0lBRUYsZ0NBQU8sR0FBUDtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFVBQVUsR0FBRyxRQUFRLEdBQUcsVUFBVSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVGLHFCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxjQUFjO0lBbEIxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDbEMsVUFBVSxFQUFFO1lBQ1YsY0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDZCxZQUFLLENBQUMsVUFBVSxFQUFFLFlBQUssQ0FBQztvQkFDcEIsU0FBUyxFQUFFLFVBQVU7aUJBQ3hCLENBQUMsQ0FBQztnQkFDSCxZQUFLLENBQUMsUUFBUSxFQUFFLFlBQUssQ0FBQztvQkFDbEIsU0FBUyxFQUFFLDJCQUEyQjtpQkFDekMsQ0FBQyxDQUFDO2dCQUNILGlCQUFVLENBQUMsb0JBQW9CLEVBQUUsY0FBTyxDQUFDLGVBQWUsRUFBRSxZQUFLLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RixpQkFBVSxDQUFDLG9CQUFvQixFQUFFLGNBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQzdELENBQUM7U0FDRjtLQUNGLENBQUM7cUNBSzBCLDBCQUFXLEVBQW9CLGVBQVE7R0FKdEQsY0FBYyxDQWdCMUI7QUFoQlksd0NBQWMiLCJmaWxlIjoiYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBSZW5kZXJlciwgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBrZXlmcmFtZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2NoYXQuc2VydmljZSc7XHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEFib3V0Q29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLWFib3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJ2Fib3V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYWJvdXQuY29tcG9uZW50LmNzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ2ljb24nLCBbXHJcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcclxuICAgICAgfSkpLFxyXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoe1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4zKSByb3RhdGUoMzYwZGVnKScsXHJcbiAgICAgIH0pKSxcclxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgYW5pbWF0ZSgnNTAwbXMgZWFzZS1pbicsIHN0eWxlKHsgYmFja2dyb3VuZDogXCJyZWRcIiB9KSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBhbmltYXRlKCcxMDBtcyBlYXNlLW91dCcpKVxyXG4gICBdKVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IHsgXHJcblx0c3RhdGU6IHN0cmluZyA9ICdpbmFjdGl2ZSc7XHJcbiAgcmVzdWx0OmFueTtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYXQ6IENoYXRTZXJ2aWNlLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikgeyB9OyBcclxuXHJcbiAgcmVzdWx0cygpIHtcclxuICAvLyAgdGhpcy5jaGF0LmdldFJlc3VsdHMoKVxyXG4gIC8vICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gIC8vICAgICAuc3Vic2NyaWJlKChyZXM6IHN0cmluZykgPT4ge3RoaXMucmVzdWx0ID0gcmVzO30sIChlcnI6IGFueSkgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfVxyXG4gXHJcblx0ZW5sYXJnZSgpIHtcclxuXHRcdHRoaXMuc3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ2luYWN0aXZlJyA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJyk7XHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG4iXX0=
