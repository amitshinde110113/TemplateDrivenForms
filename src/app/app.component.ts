import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public topics=['Angular','React','NodeJs'];
  topicHasError=true;
  userModel= new User('Rob','rob@test.com',7930110113,'default','Morning',true);
  validiate(value){
    if(value==='default')
    {
      this.topicHasError=true;
    }
    else{this.topicHasError=false;}

  }
}
