import {Component} from 'angular2/core';
import {HeaderComponent} from "./shared/header.component";
import {ListComponent} from "./list/list.component";
import {RouteConfig, ROUTER_DIRECTIVES, Location} from "angular2/router";
import {ContactComponent} from "./contact.component";

@Component({
    selector: 'my-app',
    template: `
        <a2t-header></a2t-header>
        <section *ngIf="getMode() !== 'categories'" class="category-selection {{ 'cat-' + getCategory() }}">
            <div class="image">
                <img src="src/img/{{getCategory()}}.svg" alt="">
            </div>
            <a [routerLink]="['CategoryList']">Back to Overview</a>
        </section>
        <div class="main">
            <section>
                <router-outlet></router-outlet>
            </section>
        </div> 
        <section class="contact">
            <a2t-contact></a2t-contact>
        </section>  
    `,
    directives: [HeaderComponent, ROUTER_DIRECTIVES, ContactComponent]
})
@RouteConfig([
    {path: '/', name: 'CategoryList', component: ListComponent, useAsDefault: true},
    {path: '/:categoryName', name: 'ResourceList', component: ListComponent}
])
export class AppComponent {
    constructor (private _location: Location) {}

    getCategory() {
        return this._location.path() == '' ? 'categories' : this._location.path().slice(1);
    }

    getMode() {
        return this._location.path() == '' ? 'categories' : this._location.path();
    }
}
