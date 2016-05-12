import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';


@Component({
    selector: 'my-puzzle',
    template:`
        <section class="setup">
            Enter your name: <input type="text" #name (keyup)="0">
        </section>
        <section
        [ngClass]="{
        puzzle: true,
        solved: switch1Number == switch1.value
        }"
        [ngStyle]="{display: name.value === '' ? 'none' : 'block'}">
            <h2>The Puzzle</h2>
            <p>Welcome <span class="name">{{name.value}}</span></p>
            <br>
            Switch1: <input type="text" (keyup)="0" #switch1><br>
            Switch2: <input type="text" (keyup)="0" #switch2><br>
            Switch3: <input type="text" (keyup)="0" #switch3><br>
            Switch4: <input type="text" (keyup)="0" #switch4><br>
            <h4 [hidden]="switch1Number === switch1.value ">Great {{name.value}} you did it!</h4>
        </section>
    `
})
export class PuzzleComponent implements OnInit{
    ngOnInit():any {
        this.switch1Number = Math.round(Math.random());
        this.switch2Number = Math.round(Math.random());
        this.switch3Number = Math.round(Math.random());
        this.switch4Number = Math.round(Math.random());
        console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number)
    }
    switch1Number: number;
    switch2Number: number;
    switch3Number: number;
    switch4Number: number;
}
