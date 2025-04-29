import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventchild1',
  imports: [FormsModule],
  templateUrl: './eventchild1.component.html',
  styleUrl: './eventchild1.component.css'
})
export class Eventchild1Component {
  @Input() public receivechild=''
  public msg=''
  @Output() public eventemitter= new EventEmitter
  sendChat(){
    this.eventemitter.emit(this.msg)
    this.msg=''
  }
}
