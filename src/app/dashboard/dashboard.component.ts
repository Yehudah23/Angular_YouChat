import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public array:any=[];
  data='';
  constructor (public signin:SigninComponent){}

  ngOnInit(): void{
    let users = localStorage.getItem('user')
  
  };
}
