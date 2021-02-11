import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AllCurComponent } from './components/all-cur/all-cur.component';
import { OneCurComponent } from './components/one-cur/one-cur.component';
import { from } from 'rxjs';
import { MoreDataComponent } from './components/more-data/more-data.component';
import { SearchComponent } from './components/search/search.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes:Routes = [
  {path: '', component:HomeComponent},
  {path:'all-Cur', component: AllCurComponent},
  {path: 'all-Cur/:name', component: AllCurComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCurComponent,
    OneCurComponent,
    MoreDataComponent,
    SearchComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
