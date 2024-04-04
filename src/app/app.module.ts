import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, AttributeDirectivesComponent, StructuralDirectivesComponent],
  imports: [AppRoutingModule, BrowserModule],
  providers: [],
})
export class AppModule {}
