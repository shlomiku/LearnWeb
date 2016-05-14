import {Component} from 'angular2/core';
import {FirstForm} from './first_form.component'
import {SecondForm} from "./second_form.component";

@Component({
    selector: 'my-app',
    template: `
        <first-form></first-form>
        <br>
        <second-form></second-form><br>
        <!--{{myself.name}}-->
    `,
    directives: [FirstForm, SecondForm],
    // outputs: ['myself']
})
export class AppComponent {
    // myself = {name: 'asas', age: ''};
    confirmed_myself = {name: '', age: ''};

}
