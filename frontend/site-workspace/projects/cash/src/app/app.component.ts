import { Component, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { UsersService, userLogged } from './users/services/users.service';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //CommonModule,
    RouterOutlet,
    NgbAlertModule,
    HeaderComponent,
    TopMenuComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'cash';
  activeId!:any;

	@ViewChild('staticAlert', { static: false }) staticAlert!: NgbAlert;
	@ViewChild('selfClosingAlert', { static: false }) selfClosingAlert!: NgbAlert;
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer!:ToastContainerDirective;

  userService = inject(UsersService);
  userLogged = userLogged;

  route = inject(Router);
  //_activatedRoute = inject(ActivatedRoute)
  toastrService = inject(ToastrService)
  breadcrumb:any = [];

  //userLogged = userLogged;

	constructor() {
    this.userService.decodeToken(this.userService.getToken());
    //this._activatedRoute.fragment.subscribe( (ret:any) => console.log(ret))

	}
}
