import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Eventchild1Component } from '../eventchild1/eventchild1.component';

@Component({
  selector: 'app-eventchild2',
  imports: [FormsModule,Eventchild1Component],
  templateUrl: './eventchild2.component.html',
  styleUrl: './eventchild2.component.css'
})
export class Eventchild2Component {
  msg=''
  newMsg=''
  public data=''
  sendChat(){
    console.log(this.msg)
    this.newMsg=this.msg;
  }
  receivedata(data:string){
    console.log(data);
    this.data=data
  }
}
