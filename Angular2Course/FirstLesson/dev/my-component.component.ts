/**
 * Created by Admin on 02/03/2016.
 */
import {Component} from 'angular2/core'
import {TestComponent} from "./test.component";


@Component({
    selector: 'my-component',
    template: `
    <br>
    This is my component!
    <br>
    <h1 style="color='red'" class="is-awesome">is this red?</h1>
    <script>
    console.log(inputElement.value)
    </script>
    Hi my name is <span [style.color]="inputElement.value==='yes' ? 'blue' : ''">{{name}}</span>. <!--manipulte style with angular2 attribute and a one liner if statement-->
    it's my first dom <span [class.is-awesome]="inputElement.value === 'yes'">manipulation</span>. <!--class attribute to attach a class to our DOM-->
    <br>
    <br>
    <input type="text" #inputElement (keyup)="0"> <!--# is a new angular2 way to define and attach a variable-->
    <!--the () with keyup is a way to attach and event (in this case it's the keyup) to our element.-->
    <!--the only reason we do this is - the GUI is updated when an event is triggered. so we attach it to an event to create an event-->

    <br>
    <br>
    <button type="button" [disabled]='inputElement.value!== "yes"'>This will only be enabled when input is yes</button>
    <br>
    <br>
    <test-component></test-component>
    `,
    styleUrls: ['src/css/mycomponent.css'],
    directives: [TestComponent]
})
export class MyComponentComponent {
    name = "Shlomi";
}