import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { NotesinfoComponent } from './notesinfo/notesinfo.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewnotesComponent } from './viewnotes/viewnotes.component';


const routes: Routes = [
  { path: 'viewnotes', component: ViewnotesComponent },
  { path: 'notesinfo', component: NotesinfoComponent },
  { path: '', component: LoginComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NotesinfoComponent,
    ViewnotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
