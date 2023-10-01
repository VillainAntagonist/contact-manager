import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button>
      <mat-icon>face</mat-icon>
      Click Me!
    </button>

    <mat-checkbox>Check Me!</mat-checkbox>
  `,
  styles: [
  ]
})
export class ButtonsComponent {

}
