import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { CapitalizeDirective } from './directives/capitalize.directive';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, AttributeDirectivesComponent, StructuralDirectivesComponent, CapitalizeDirective],
  imports: [AppRoutingModule, BrowserModule],
  providers: [],
})
export class AppModule {}
