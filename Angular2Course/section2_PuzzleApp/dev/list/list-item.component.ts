import {Component} from "angular2/core";
import {Tutorial} from "../shared/tutorial.interface";
import {Location} from "angular2/router";

@Component({
    selector: 'a2t-list-item',
    template: `
        <article class="{{ 'cat-' + getCategory() }}">
            <div [ngClass]="{'image': true, 'detail': getCategory() == null}" [ngStyle]="{'background-image': 'url(' + getImage() + ')'}">
            </div>
            <div class="description">
                <h1>{{ item.title }}</h1>
                <div class="info"></div>
                <p>{{ item.description }}</p>
            </div>
        </article>
    `,
    styleUrls: ['src/css/list-item.css'],
    inputs: ['item']
})
export class ListItemComponent {
    item: Tutorial;

    constructor (private _location: Location) {
    }
    
    getCategory() {
        if (this.isCategoryList()) {
            return this.item.type;
        }
    }
    
    getImage() {
        if (this.isCategoryList()) {
            return 'src/img/' + this.getCategory() + '.svg';
        } else {
            return 'src/img/' + this.item.id + '.jpg';
        }
    }

    private isCategoryList() {
        return this._location.path() == '';
    }
}