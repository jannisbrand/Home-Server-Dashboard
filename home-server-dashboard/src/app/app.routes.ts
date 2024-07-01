import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

export const routes: Routes = [
  //{ path: '', redirectTo: '/', pathMatch: 'full'},
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "contact", component: AboutComponent },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
export const routing = RouterModule.forRoot(routes);

export class AppRoutingModule { }
