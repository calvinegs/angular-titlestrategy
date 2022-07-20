import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderComponent } from './pages/order/order.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserdataComponent } from './pages/userdata/userdata.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: '首頁' },
  { path: 'login', component: LoginComponent, title: '登入' },
  { path: 'register', component: RegisterComponent, title: '註冊' },
  { path: 'profile', component: ProfileComponent, title: 'Profile' },
  { path: 'userdata', component: UserdataComponent, title: '使用者資料' },
  { path: 'order', component: OrderComponent, title: '訂單' },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`My App - ${title}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy }
  ]
})
export class AppRoutingModule { }
