/**
 * Created by Admin on 02/03/2016.
 */
import {Component} from 'angular2/core'


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
    Hi my name is <span [style.color]="inputElement.value==='yes' ? 'blue' : ''">{{name}}</span>. it's my first dom <span [class.is-awesome]="inputElement.value === 'yes'">manipulation</span>.
    <br>
    <br>
    <input type="text" #inputElement (keyup)="0"> <!--# is a new angular2 way to define and attach a variable-->
    <!--the () with keyup is a way to attach and event (in this case it's the keyup) to our element.-->
    <!--the only reason we do this is - the GUI is updated when an event is triggered. so we attach it to an event to create an event-->

    <br>
    <br>
    <button type="button" [disabled]='inputElement.value!== "yes"'>This will only be enabled when input is yes</button>
    `,
    styleUrls: ['src/css/mycomponent.css']
})
export class MyComponentComponent {
    name = "Shlomi";
}