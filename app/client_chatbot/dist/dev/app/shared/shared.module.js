"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var index_1 = require("./toolbar/index");
var index_2 = require("./navbar/index");
var index_3 = require("./footer/index");
var chat_service_1 = require("./chat.service");
var angular_chat_bot_service_1 = require("./angular-chat-bot.service");
var chat_component_1 = require("./chat/chat.component");
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule],
        declarations: [index_1.ToolbarComponent, index_2.NavbarComponent, index_3.FooterComponent, chat_component_1.ChatComponent],
        exports: [index_1.ToolbarComponent, index_2.NavbarComponent, chat_component_1.ChatComponent,
            common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule, index_3.FooterComponent],
        providers: [{ provide: chat_service_1.ChatService, useClass: angular_chat_bot_service_1.AngularChatBotService }]
    })
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQThEO0FBQzlELDBDQUErQztBQUMvQyx3Q0FBNkM7QUFDN0MsMENBQStDO0FBRS9DLHlDQUFtRDtBQUNuRCx3Q0FBaUQ7QUFDakQsd0NBQWlEO0FBRWpELCtDQUE2QztBQUM3Qyx1RUFBbUU7QUFFbkUsd0RBQXNEO0FBYXRELElBQWEsWUFBWTtJQUF6QjtJQU1BLENBQUM7SUFMUSxvQkFBTyxHQUFkO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLGNBQVk7U0FDdkIsQ0FBQztJQUNKLENBQUM7SUFDSCxtQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksWUFBWTtJQVB4QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLHFCQUFZLEVBQUUsbUJBQVcsQ0FBQztRQUNsRCxZQUFZLEVBQUUsQ0FBQyx3QkFBZ0IsRUFBRSx1QkFBZSxFQUFFLHVCQUFlLEVBQUUsOEJBQWEsQ0FBQztRQUNqRixPQUFPLEVBQUUsQ0FBQyx3QkFBZ0IsRUFBRSx1QkFBZSxFQUFFLDhCQUFhO1lBQ3hELHFCQUFZLEVBQUUsbUJBQVcsRUFBRSxxQkFBWSxFQUFFLHVCQUFlLENBQUM7UUFDMUQsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsMEJBQVcsRUFBRSxRQUFRLEVBQUUsZ0RBQXFCLEVBQUUsQ0FBQztLQUN4RSxDQUFDO0dBQ1csWUFBWSxDQU14QjtBQU5ZLG9DQUFZIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9pbmRleCc7XHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyL2luZGV4JztcclxuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXIvaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tICcuL2NoYXQuc2VydmljZSc7XHJcbmltcG9ydCB7IEFuZ3VsYXJDaGF0Qm90U2VydmljZSB9IGZyb20gJy4vYW5ndWxhci1jaGF0LWJvdC5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IENoYXRDb21wb25lbnQgfSBmcm9tICcuL2NoYXQvY2hhdC5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxyXG4gKi9cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVG9vbGJhckNvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnQsIENoYXRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtUb29sYmFyQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsIENoYXRDb21wb25lbnQsXHJcbiAgICBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIEZvb3RlckNvbXBvbmVudF0sXHJcbiAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2hhdFNlcnZpY2UsIHVzZUNsYXNzOiBBbmd1bGFyQ2hhdEJvdFNlcnZpY2UgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU2hhcmVkTW9kdWxlXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=
