/**
 * Created by user on 5/12/2016.
 */
import {Component} from "angular2/core";
@Component({
    selector: 'second-form',
    template: `
    <div class="container">
        <div class="my-box">
            <h4>Confirmation Box</h4>
            Please Enter your name<input type="text" [(ngModel)]="myself2.name"><br>
            Please Enter your age<input type="text" [(ngModel)]="myself2.age"><br><br>
            <button [disabled]="true">Confirm</button>
        </div>
    </div>
    {{myself2.name}}
    `,
    inputs: ['myself']

})
export class SecondForm{
    myself2 = {name: '', age: ''};

}