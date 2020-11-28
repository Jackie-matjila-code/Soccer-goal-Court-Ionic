import { TabsPage } from './menu/tabs/tabs.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsPage, children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'settings',
        loadChildren: () => import('./components/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./components/notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./components/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
      },
    
    ]
  },
  {
    path: 'chats',
    loadChildren: () => import('./components/chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./components/account/account.module').then( m => m.AccountPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
