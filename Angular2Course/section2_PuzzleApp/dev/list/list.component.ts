import {Component, OnInit} from "angular2/core";
import {ListItemComponent} from "./list-item.component";
import {RouteParams, Router} from "angular2/router";
import {Item} from "../shared/item.interface";
import {TUTORIALS} from "../shared/data/tutorials.data";
import {CATEGORIES} from "../shared/data/categories.data";
import {Title} from "angular2/src/platform/browser/title";

@Component({
    template: `
        <a2t-list-item *ngFor="#item of items" [item]="item" (click)="onSelectItem(item)"></a2t-list-item>
    `,
    directives: [ListItemComponent],
    providers: [Title]
})
export class ListComponent implements OnInit {
    private isCategoryList = true;
    items:Item[];

    constructor(private _routeParams:RouteParams, private _router:Router, private _title:Title) {
    }

    onSelectItem(item:Item) {
        if (this.isCategoryList) {
            this._router.navigate(['ResourceList', {'categoryName': item.type}]);
        } else {
            window.open(item.url);
        }
    }

    ngOnInit():any {
        const category = this._routeParams.get('categoryName');
        if (!CATEGORIES.find((item) => {
                return item.type == category;
            })) {
            this._router.navigate(['CategoryList']);
        }
        if (CATEGORIES.find((item) => {
                return item.type == category;
            })) {
            this.isCategoryList = false;
            this.items = TUTORIALS.filter(function (item) {
                return item.type == category;
            });
            this._title.setTitle(CATEGORIES.find((item) => {
                return item.type == category;
            }).description);
        } else {
            this.isCategoryList = true;
            this.items = CATEGORIES;
            this._title.setTitle('Selected Angular 2 Tutorials');
        }
    }
}