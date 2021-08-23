import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from "../post/components/post/post.component";
import {DetailPostComponent} from "../post/components/detail-post/detail-post.component";

const routes: Routes = [
  {path: "", redirectTo: "/covid", pathMatch: "full"},
  {path: "covid", component: PostComponent},
  {path: "detail", component: DetailPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
