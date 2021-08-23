import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from './components/post/post.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {DetailPostComponent} from './components/detail-post/detail-post.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../routing/app-routing.module";
import {MatListModule} from "@angular/material/list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    PostComponent,
    DetailPostComponent
  ],
  exports: [
    PostComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    MatListModule,
    MatProgressSpinnerModule
  ]
})
export class PostModule {
}
