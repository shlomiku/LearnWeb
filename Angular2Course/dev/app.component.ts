import {Component} from 'angular2/core';
import {MyComponentComponent} from "./my-component.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        second component
        <my-componet></my-componet>
    `,
    directives: [MyComponentComponent]
})
export class AppComponent {

}
