import { Component, inject } from '@angular/core';
import { userIsLogged } from '../../users/services/users.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  user = userIsLogged;

}
