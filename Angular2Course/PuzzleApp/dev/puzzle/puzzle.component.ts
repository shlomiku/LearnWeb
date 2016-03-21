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
        solved: swtich1Number == switch1.value
        }"
        [ngStyle]="{display: name.value === '' ? 'none' : 'block'}">
            <h2>The Puzzle</h2>
            <p>Welcome <span class="name">XXX</span></p>
            <br>
            Switch1: <input type="text"><br>
            Switch2: <input type="text"><br>
            Switch3: <input type="text"><br>
            Switch4: <input type="text"><br>
            <h4>Great {name.value} you did it!</h4>
        </section>
    `
})
export class PuzzleComponent implements OnInit{
    ngOnInit():any {
        this.swtich1Number = Math.round(Math.random());
        this.swtich2Number = Math.round(Math.random());
        this.swtich3Number = Math.round(Math.random());
        this.swtich4Number = Math.round(Math.random());
        console.log(this.swtich1Number, this.swtich2Number, this.swtich3Number, this.swtich4Number)
    }
    swtich1Number: number;
    swtich2Number: number;
    swtich3Number: number;
    swtich4Number: number;
}
