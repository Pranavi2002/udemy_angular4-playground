import { Component } from '@angular/core';

import { DataService } from './data.service';

import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // template: '<h1>Hey guys!</h1>', 
  // template: `
  // <h1>Hey guys!</h1>
  // <p>How are you doing?</p>

  // <p>{{ myobject }}</p>
  // <p>{{ myobject.location }}</p>
  // `, 
  // template: `
  // <h1>Hey guys!</h1>
  // <p>How are you doing?</p>

  // <ul>
  //   <li *ngFor="let arr of myArr">{{ arr }}</li>
  // </ul>  
  // `,
  // template: `
  // <h1>Hey guys!</h1>
  // <p>How are you doing?</p>
  
  // <ul>
  //   <li *ngIf="myArr">Yeah, I exist</li>
  //   <li *ngIf="!myArr">Yeah, I don't exist</li>
  //   <li *ngIf="myArr == 'something'">Yeah, something exist</li>
  // </ul>  
  // `,
  // template: `
  // <h1>Hey guys!</h1>
  // <p>How are you doing?</p>
  
  // <ul>
  //   <li *ngIf="myArr; else otherTmpl">Yeah, I exist</li>
  // </ul>  

  // <ng-template #otherTmpl>No, I don't exist</ng-template>
  // `,
  // template: `
  // <h1>Hey guys!</h1>
  // <p>How are you doing?</p>
  
  // <div *ngIf="myArr; then tmpl1 else tmpl2"></div> 

  // <ng-template #tmpl1>True</ng-template>
  // <ng-template #tmpl2>False</ng-template>
  // `,
  // template: `
  // <h1>Hey guys!</h1>
  // <p>How are you doing?</p>
  
  // <img src="{{ angularLogo }}">
  // <img [src] = "angularLogo">
  // <img bind-src="angularLogo">
  // `,
  // template:`
  // <h1>Hey guys!</h1>
  // <p>How are you doing?</p>

  // <button [disabled]= "buttonStatus">My Button</button>
  // <button [disabled]= "buttonStatus == 'enabled'">My Button</button>
  // `,
  // template:`
  // <button (click)="myEvent($event)">My Button</button>
  // `,
  // template:`
  // <button (mouseenter)="myEvent($event)">My Button</button>
  // `,
  // styleUrls: ['./app.component.css']
  // template: `
  //   <h1>Hello!</h1>
  // `,
  // styles: [`
  // h1{
  //   text-decoration:underline;
  //   color:blue;
  //   font-size:50px;
  // }
  // `]
  // template:`
  //   <h1 [class]="titleClass">Hello!</h1>
  // `,
  // template:`
  //   <h1 [class.red-title]="titleClass">Hello!</h1>
  // `,
//   template:`
//   <h1 [ngClass]="titleClasses">Hello!</h1>
// `,
// template:`
//   <h1 [style.color]="titleStyle">Hello!</h1>
// `,
// template:`
//   <h1 [style.color]="titleStyle ? 'green' : 'pink'">Hello!</h1>
// `,
// template:`
//   <h1 [ngStyle]="titleStyles">Hello!</h1>
// `,
// template: `
//   <p>{{ someProperty }}</p>
// `,
//   styles: [`
//     h1{
//       text-decoration:underline;
//     }
//     .red-title{
//       color:red;
//     }
//     .large-title{
//       font-size:4em;
//     }
//   `]
template: `
  <p [@myAwesomeAnimation] ='state' (click) = "animateMe()">I will animate</p>
`,
styles: [`
  p{
    width:200px;
    background:lightgray;
    margin:100px auto;
    text-align:center;
    padding:20px;
    font-size:1.5em;
  }
`],
animations: [
trigger('myAwesomeAnimation', [
  state('small', style({
    transform: 'scale(1)',
  })),
  state('large', style({
    transform: 'scale(1.2)',
  })),
  // transition('small <=> large', animate('300ms ease-in', style({
  //   transform: 'translateY(40px)'
  // }))),
  transition('small <=> large', animate('300ms ease-in', keyframes([
    style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
    style({opacity: 1, transform: 'translateY(35px)', offset: .5}),
    style({opacity: 1, transform: 'translateY(0)', offset: 1}),
  ]))),
]),
]
// templateUrl: './app.component.html',
// styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular4-playground';
  // myobject = {
  // gender: 'female',
  // age: 20,
  // location: 'telangana'
  // };
  // myArr = ['him','hers','yours'];
  // myArr = 'nothing';
  // myArr = 'something';
  // myArr = true;
  // myArr = 'nothing';
  // angularLogo = 'https://angular.io/assets/images/logos/angular/angular.svg';
  // buttonStatus = true;
  // buttonStatus = false;
  // buttonStatus = 'enabled';
  // myEvent(event:any) {
  // console.log(event);
  // }
  // titleClass = 'red-title';
  // titleClass = true;
  // titleClass = false;
  // titleClasses = {
  //   'red-title' : true,
  //   'large-title' : true
  // }
  // titleStyle = 'red';
  // titleStyle = true;
  // titleStyle = false;
  // titleStyles = {
  //   'color' : 'red',
  //   'font-size' : '4em'
  // }

  // constructor(private dataService:DataService) {
  
  // }

  // someProperty:string = '';

  // ngOnInit() {
  //   console.log(this.dataService.cars);

  //   this.someProperty = this.dataService.myData();
  // }

  state: string = 'small'
  animateMe() {
    this.state = (this.state == 'small' ? 'large' : 'small');
  }

  // title = 'angular4-playground';
  
}
