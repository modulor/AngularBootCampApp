import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  styleUrl: './attribute-directives.component.scss',
  templateUrl: './attribute-directives.component.html',
})
export class AttributeDirectivesComponent {
  public active: boolean = false;

  public toggleActive(): void {
    this.active = !this.active;
  }
}
