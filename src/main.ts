import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  RouterModule,
  RouterOutlet,
  Routes,
} from '@angular/router';
import { SubComponent } from './sub.component';

const routes: Routes = [
  {
    path: 'sub/:id',
    title: 'Prva stran',
    component: SubComponent,
  },
];

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a
        title="simplify router values"
        [routerLink]="['/sub', 12]"
        [queryParams]="{ order: 'popular'}"
        >
        <strong>Router values</strong>
      </a>
      <br>
      <br>
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
