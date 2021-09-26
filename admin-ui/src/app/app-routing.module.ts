import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RootComponent} from "./root/root.component";
import {StartPageComponent} from "./start-page/start-page.component";
import {SecondPageComponent} from "./second-page/second-page.component";
import {AppComponent} from "./app.component";
import {LoginPageComponent} from "./login-page/login-page.component";

const routes: Routes = [
  {
    path: '', component: RootComponent,
    children: [
      { path: '', component: StartPageComponent },
      { path: 'about', component: SecondPageComponent }
    ]
  },
  { path: '**', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
