/**
 * Created by user on 5/12/2016.
 */
import {Component} from "angular2/core";
@Component({
    selector: 'first-form',
    template: `
    <div class="container">
        <div class="my-box">
            Please Enter your name<input type="text" [(ngModel)]="myself.name" (keyup)="onKeyUp()"><br>
            Please Enter your age<input type="text" [(ngModel)]="myself.age" (keyup)="onKeyUp()"><br><br>
            <button [disabled]="!isFilled">Submit</button>
            {{isValid}}
            <div>Your data is  Valid</div>
            <div>Your data is Filled: {{isFilled ? 'Yes' : 'No'}}</div>
            {{ss}}
        </div>
    </div>
    {{myself.name}}
    `,
    // inputs: ['myself']
})
export class FirstForm{
    myself = {name: '', age: ''};
    isFilled = false;
    isValid = false;
    ss = 'ss';

    onKeyUp() {
        if (this.myself.name != '' && this.myself.age != ''){
            this.isFilled = true;
        }
        else {
            this.isFilled = false;
        }
        if (this.myself.name != '' && /^\d+$/.test(this.myself.age)){
            this.isValid = true;
        }
        else {
            this.isValid = false;
        }
}

}