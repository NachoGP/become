
import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);
//Rutas
import { appRoutes  } from './app.routing';

//Servicios
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';
import { RelatoservicesService } from './relatoservices.service';

//Maps

import { AgmCoreModule } from '@agm/core';

//Componentes
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { BeawriterComponent } from './beawriter/beawriter.component';
import { RulesComponent } from './rules/rules.component';
import { BecamoawriterComponent } from './becamoawriter/becamoawriter.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SelecttimeComponent } from './selecttime/selecttime.component';
import { WriteboardComponent } from './writeboard/writeboard.component';
import { ProposalComponent } from './proposal/proposal.component';
import { NewprofileComponent } from './newprofile/newprofile.component';
import { TipsComponent } from './tips/tips.component';
import { ReadstoryComponent } from './readstory/readstory.component';
import { PoliticaComponent } from './politica/politica.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HowitworksComponent,
    BeawriterComponent,
    RulesComponent,
    BecamoawriterComponent,
    MapComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    SelecttimeComponent,
    WriteboardComponent,
    ProposalComponent,
    NewprofileComponent,
    TipsComponent,
    ReadstoryComponent,
    PoliticaComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),HttpModule, FormsModule, ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMdDkzmwls6vCB-pToZz4XlVucmVZ8LI8'
    })
  ],
  providers: [
    { provide:LOCALE_ID, useValue: 'es'}, UserService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
