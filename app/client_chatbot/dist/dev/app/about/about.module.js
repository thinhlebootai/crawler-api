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
var about_component_1 = require('./about.component');
var about_routing_module_1 = require('./about-routing.module');
var forms_1 = require('@angular/forms');
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, about_routing_module_1.AboutRoutingModule, forms_1.FormsModule],
            declarations: [about_component_1.AboutComponent],
            exports: [about_component_1.AboutComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutModule);
    return AboutModule;
}());
exports.AboutModule = AboutModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCxxQ0FBbUMsd0JBQXdCLENBQUMsQ0FBQTtBQUM1RCxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQU83QztJQUFBO0lBQTJCLENBQUM7SUFMNUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLHlDQUFrQixFQUFFLG1CQUFXLENBQUM7WUFDeEQsWUFBWSxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUM5QixPQUFPLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQzFCLENBQUM7O21CQUFBO0lBQ3lCLGtCQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLG1CQUFXLGNBQUksQ0FBQSIsImZpbGUiOiJhcHAvYWJvdXQvYWJvdXQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFib3V0Um91dGluZ01vZHVsZSB9IGZyb20gJy4vYWJvdXQtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQWJvdXRSb3V0aW5nTW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQWJvdXRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtBYm91dENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFib3V0TW9kdWxlIHsgfVxyXG4iXX0=
