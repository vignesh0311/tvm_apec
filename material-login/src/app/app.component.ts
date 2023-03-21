import {Component} from '@angular/core';
/**
* @title login demo
*/
@Component({
selector: 'login-demo',
styleUrls: ['demo.login.component.css'],
templateUrl: 'demo.login.component.html',
})
export class LoginFormDemo {
username : string ="";
password : string ="";
show: boolean= false;
submit(){
console.log("user name is " + this.username)
this.clear();
}
clear(){
this.username ="";
this.password = "";
this.show = true;
}
}