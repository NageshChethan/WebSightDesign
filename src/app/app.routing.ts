import { ModuleWithProviders } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
      { path: 'home',
      component: HomeComponent
      },

    { path: 'about',
     component: AboutComponent
     },

    { path: 'login',
     component: LoginComponent
     },

    { path: '',
     redirectTo: '/home', 
     pathMatch: 'full' 
    },

    { path: '**',
     component: HomeComponent 
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forChild(appRoutes);