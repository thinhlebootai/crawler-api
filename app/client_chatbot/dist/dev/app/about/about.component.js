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
var chat_service_1 = require('../shared/chat.service');
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
        __metadata('design:paramtypes', [chat_service_1.ChatService, core_1.Renderer])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtRyxlQUFlLENBQUMsQ0FBQTtBQUVuSCw2QkFBNEIsd0JBQXdCLENBQUMsQ0FBQTtBQXNCckQ7SUFJRSx3QkFBb0IsSUFBaUIsRUFBVSxRQUFrQjtRQUE3QyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUhsRSxVQUFLLEdBQVcsVUFBVSxDQUFDO0lBRzJDLENBQUM7O0lBRXRFLGdDQUFPLEdBQVA7SUFJQSxDQUFDO0lBRUYsZ0NBQU8sR0FBUDtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFVBQVUsR0FBRyxRQUFRLEdBQUcsVUFBVSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQWhDRjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNsQyxVQUFVLEVBQUU7Z0JBQ1YsY0FBTyxDQUFDLE1BQU0sRUFBRTtvQkFDZCxZQUFLLENBQUMsVUFBVSxFQUFFLFlBQUssQ0FBQzt3QkFDcEIsU0FBUyxFQUFFLFVBQVU7cUJBQ3hCLENBQUMsQ0FBQztvQkFDSCxZQUFLLENBQUMsUUFBUSxFQUFFLFlBQUssQ0FBQzt3QkFDbEIsU0FBUyxFQUFFLDJCQUEyQjtxQkFDekMsQ0FBQyxDQUFDO29CQUNILGlCQUFVLENBQUMsb0JBQW9CLEVBQUUsY0FBTyxDQUFDLGVBQWUsRUFBRSxZQUFLLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN4RixpQkFBVSxDQUFDLG9CQUFvQixFQUFFLGNBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUM3RCxDQUFDO2FBQ0Y7U0FDRixDQUFDOztzQkFBQTtJQWlCRixxQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksc0JBQWMsaUJBZ0IxQixDQUFBIiwiZmlsZSI6ImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgUmVuZGVyZXIsIHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwga2V5ZnJhbWVzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDaGF0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9jaGF0LnNlcnZpY2UnO1xyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBBYm91dENvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1hYm91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdhYm91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2Fib3V0LmNvbXBvbmVudC5jc3MnXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdpY29uJywgW1xyXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXHJcbiAgICAgIH0pKSxcclxuICAgICAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMykgcm90YXRlKDM2MGRlZyknLFxyXG4gICAgICB9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIGFuaW1hdGUoJzUwMG1zIGVhc2UtaW4nLCBzdHlsZSh7IGJhY2tncm91bmQ6IFwicmVkXCIgfSkpKSxcclxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgYW5pbWF0ZSgnMTAwbXMgZWFzZS1vdXQnKSlcclxuICAgXSlcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7IFxyXG5cdHN0YXRlOiBzdHJpbmcgPSAnaW5hY3RpdmUnO1xyXG4gIHJlc3VsdDphbnk7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGF0OiBDaGF0U2VydmljZSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHsgfTsgXHJcblxyXG4gIHJlc3VsdHMoKSB7XHJcbiAgLy8gIHRoaXMuY2hhdC5nZXRSZXN1bHRzKClcclxuICAvLyAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAvLyAgICAgLnN1YnNjcmliZSgocmVzOiBzdHJpbmcpID0+IHt0aGlzLnJlc3VsdCA9IHJlczt9LCAoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH1cclxuIFxyXG5cdGVubGFyZ2UoKSB7XHJcblx0XHR0aGlzLnN0YXRlID0gKHRoaXMuc3RhdGUgPT09ICdpbmFjdGl2ZScgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZScpO1xyXG5cdH1cclxuXHRcclxufVxyXG5cclxuIl19
