import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  styleUrl: './data-binding.component.scss',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {
  protected textOne: string = 'Hello World';
  protected textTwo: string = 'Hello World';

  public openAlert(): void {
    alert('I was triggered by an event');
  }
}
