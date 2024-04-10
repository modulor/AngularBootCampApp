import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { BrowserModule } from '@angular/platform-browser';
import { CapitalizeDirective } from './directives/capitalize.directive';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AttributeDirectivesComponent,
    StructuralDirectivesComponent,
    CapitalizeDirective,
    CustomDirectivesComponent,
    DataBindingComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule],
  providers: [],
})
export class AppModule {}
