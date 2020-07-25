import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import {UserMapComponent} from "../../modules/user-map/user-map.component";
import {AgmCoreModule} from "@agm/core";
import {UserResponseComponent} from "../../modules/user-response/user-response.component";
import {LoginComponent} from "../../modules/auth/login/login.component";
import {RegistrationComponent} from "../../modules/auth/registration/registration.component";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SentimentsComponent} from "../../modules/sentiments/sentiments.component";
import {ModalsComponent} from "../../modules/posts/modals/modals.component";
import {MatDialogModule} from "@angular/material/dialog";
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    UserMapComponent,
    UserResponseComponent,
    LoginComponent,
    RegistrationComponent,
    SentimentsComponent,
    ModalsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIzrwihgRxh4Jh7s1fQrdMiW_aqF7ME-k'
    }),
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule

  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
