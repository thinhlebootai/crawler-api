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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var index_1 = require('./toolbar/index');
var index_2 = require('./navbar/index');
var index_3 = require('./footer/index');
var chat_service_1 = require('./chat.service');
var angular_chat_bot_service_1 = require('./angular-chat-bot.service');
var chat_component_1 = require('./chat/chat.component');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule
        };
    };
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule],
            declarations: [index_1.ToolbarComponent, index_2.NavbarComponent, index_3.FooterComponent, chat_component_1.ChatComponent],
            exports: [index_1.ToolbarComponent, index_2.NavbarComponent, chat_component_1.ChatComponent,
                common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule, index_3.FooterComponent],
            providers: [{ provide: chat_service_1.ChatService, useClass: angular_chat_bot_service_1.AngularChatBotService }]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBQzlELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLHNCQUFpQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ25ELHNCQUFnQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pELHNCQUFnQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBRWpELDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHlDQUFzQyw0QkFBNEIsQ0FBQyxDQUFBO0FBRW5FLCtCQUE4Qix1QkFBdUIsQ0FBQyxDQUFBO0FBYXREO0lBQUE7SUFNQSxDQUFDO0lBTFEsb0JBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7SUFDSixDQUFDO0lBWkg7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLHFCQUFZLEVBQUUsbUJBQVcsQ0FBQztZQUNsRCxZQUFZLEVBQUUsQ0FBQyx3QkFBZ0IsRUFBRSx1QkFBZSxFQUFFLHVCQUFlLEVBQUUsOEJBQWEsQ0FBQztZQUNqRixPQUFPLEVBQUUsQ0FBQyx3QkFBZ0IsRUFBRSx1QkFBZSxFQUFFLDhCQUFhO2dCQUN4RCxxQkFBWSxFQUFFLG1CQUFXLEVBQUUscUJBQVksRUFBRSx1QkFBZSxDQUFDO1lBQzFELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLDBCQUFXLEVBQUUsUUFBUSxFQUFFLGdEQUFxQixFQUFFLENBQUM7U0FDeEUsQ0FBQzs7b0JBQUE7SUFPRixtQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksb0JBQVksZUFNeEIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci9pbmRleCc7XHJcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGVyL2luZGV4JztcclxuXHJcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSAnLi9jaGF0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbmd1bGFyQ2hhdEJvdFNlcnZpY2UgfSBmcm9tICcuL2FuZ3VsYXItY2hhdC1ib3Quc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0L2NoYXQuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cclxuICovXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1Rvb2xiYXJDb21wb25lbnQsIE5hdmJhckNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50LCBDaGF0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbVG9vbGJhckNvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBDaGF0Q29tcG9uZW50LFxyXG4gICAgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUm91dGVyTW9kdWxlLCBGb290ZXJDb21wb25lbnRdLFxyXG4gICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENoYXRTZXJ2aWNlLCB1c2VDbGFzczogQW5ndWxhckNoYXRCb3RTZXJ2aWNlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNoYXJlZE1vZHVsZVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19
