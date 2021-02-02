import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-click-tracker',
  template: `
    <button (click)="increment()">{{ clicks }} clicks</button>
  `,
  styles: [`
    button {
      background-color: cornflowerblue;
      padding: 10px;
      border: none;
      border-radius: 5px;
    }
  `]
})
export class ClickTrackerComponent implements OnInit {

  @Input() step = 1;
  @Output() increase: EventEmitter<any> = new EventEmitter<any>();

  public clicks = 0;

  constructor() { }

  ngOnInit(): void { }

  increment(): void {
    this.clicks = this.clicks + (+this.step);
    this.increase.emit({ numClicks: this.clicks });
  }

}
