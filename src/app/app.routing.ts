import { Component } from '@angular/core';
import { ReadstoryComponent } from './readstory/readstory.component';
import { WriteboardComponent } from './writeboard/writeboard.component';
import { SelecttimeComponent } from './selecttime/selecttime.component';
import { RouterModule, Router,Routes } from '@angular/router';
import { MainComponent} from './main/main.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { ProposalComponent } from './proposal/proposal.component';
import { NewprofileComponent } from './newprofile/newprofile.component';
import { TipsComponent } from './tips/tips.component';

export const appRoutes: Routes = [
    { path: '', component: MainComponent }, 
    { path: 'login', component:LoginComponent},
    { path: 'register', component:RegisterComponent},
    { path: 'selecttime', component:SelecttimeComponent},
    { path: 'newprofile', component:NewprofileComponent},
    { path: 'proposal', component:ProposalComponent},
    { path: 'readstory/:id', component:ReadstoryComponent},
    { path: 'tips', component:TipsComponent},
    { path: 'writeboard', component:WriteboardComponent},
    { path: '**', component: MainComponent }
]
   