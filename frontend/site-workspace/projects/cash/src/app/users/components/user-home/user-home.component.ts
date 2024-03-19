import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userIsLogged, userLogged } from '../../services/users.service';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {
  isLogged=userIsLogged;
  user = userLogged;

}
