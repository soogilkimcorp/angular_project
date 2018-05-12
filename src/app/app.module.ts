import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//////// loopback Import Module Start ////////
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SDKBrowserModule } from './shared/sdk/index';
//////// loopback Import Module Start ////////
import { AppComponent } from './app.component';

import { MyprojectComponent } from './myproject/myproject.component';
import { UseritemComponent } from './useritem/useritem.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { FormComponent } from './form/form.component';
import { SimplehttpComponent } from './simplehttp/simplehttp.component';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

const routes:Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'home',
        redirectTo:''
    },
    {
        path:'myproject/:id',
        component:MyprojectComponent
    },
    {
        path:'userlist',
        component:UserlistComponent
    },
    {
        path:'useritem',
        component:UseritemComponent
    },
    {
        path:'form',
        component:FormComponent
    },
    {
        path:'simpleHttp',
        component:SimplehttpComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    MyprojectComponent,
    UseritemComponent,
    UserlistComponent,
    HomeComponent,
    ArticleComponent,
    FormComponent,
    SimplehttpComponent
  ],
  imports: [

    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    //////// loopback Import Module Start ////////
    BrowserModule,
    FormsModule,
    HttpModule,
    SDKBrowserModule.forRoot(),
    //////// loopback Import Module Start ////////
  ],
  providers: [
        {provide:"API_URL", useValue:"http://mysite.com"},
        {provide:"API_URL2", useValue:"http://mysite.com2"},
        {provide:APP_BASE_HREF, useValue:"/"},
        {provide:LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
