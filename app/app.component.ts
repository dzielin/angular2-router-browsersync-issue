import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { FirstPageComponent } from './first-page.component';
import { SecondPageComponent } from './second-page.component';
import { ThirdPageComponent } from './third-page.component';
import { FourthPageComponent } from './fourth-page.component';
import { FifthPageComponent } from './fifth-page.component';

@RouteConfig([
    { path: '/page1', name: 'Page1', component: FirstPageComponent },
    { path: '/page2', name: 'Page2', component: SecondPageComponent },
    { path: '/page3', name: 'Page3', component: ThirdPageComponent },
    { path: '/page4', name: 'Page4', component: FourthPageComponent },
    { path: '/page5', name: 'Page5', component: FifthPageComponent }
])

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
        <ul>
            <li><a [routerLink]="['Page1']">Page 1</a></li>
            <li><a [routerLink]="['Page2']">Page 2</a></li>
            <li><a [routerLink]="['Page3']">Page 3</a></li>
            <li><a [routerLink]="['Page4']">Page 4</a></li>
            <li><a [routerLink]="['Page5']">Page 5 (Broken)</a></li>
        </ul>
        <a href="#"></a>
        <p>Start on any page (other than page 5).  Use two tabs with the same page open on each.  Browse 
        through the other pages (1-4).  BrowserSync keeps two tabs synchronized until you return to a page 
        you've already visited.  BrowserSync fails on page 5, the only page with "template" defined by its 
        component instead of "templateUrl."  These two things combined lead me to believe that this issue 
        is occuring anytime an HTML template does not need to be loaded in by the browser.  For subsequent 
        requests to the same page, the content is already available to the browser and BrowserSync fails.</p>
        <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES, FirstPageComponent, SecondPageComponent, ThirdPageComponent, FourthPageComponent],
    providers: [ROUTER_PROVIDERS]
})
export class AppComponent {
}