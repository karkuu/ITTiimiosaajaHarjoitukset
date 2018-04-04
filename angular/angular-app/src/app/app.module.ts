import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { MyserviceService } from './myservice.service';

import { SqrtPipe } from './app.sqrt';
import { LinkTargetComponent } from './link-target/link-target.component';


@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    LinkTargetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
       {
          path: 'link-target',
          component: LinkTargetComponent
       }
    ]),
    BrowserAnimationsModule,
    HttpModule  
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
