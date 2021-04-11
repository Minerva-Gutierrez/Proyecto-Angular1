import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*importar para crear formularios
*/import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,

    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*cargarlo al proyeco la activacion del formulario*/
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
