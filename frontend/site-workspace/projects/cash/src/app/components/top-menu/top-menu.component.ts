import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgbCollapse, NgbNav, NgbNavItem, NgbNavLink } from '@ng-bootstrap/ng-bootstrap';
import { AlertBtnComponent } from '../alert-btn/alert-btn.component';
import { UserBtnComponent } from '../../users/components/user-btn/user-btn.component';

export interface iTopMenu {
  title: string,
  icon?:string,
  link?: string | string[],
  query?: string,
  fragment?: string,
  //roles?: string[],
  hidden?: boolean,
  state?:any
}

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [
    //CommonModule,
    AsyncPipe,
    NgbNav,
    NgbNavItem,
    NgbNavLink,
    NgbCollapse,
    RouterLink,
    UserBtnComponent,
    AlertBtnComponent,
    UserBtnComponent
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})

export class TopMenuComponent implements OnInit{
  public isMenuCollapsed = true;
  activeId!:string | null;
  screenWidth=0;
  screenHeight=0;

  @HostListener('window:resize', ['$event'])
  onResize(event?:any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  links:iTopMenu[] = [
    {
      title: 'Inicio',
      fragment: '',
      icon: '<i class="fas fa-home-lg"></i>'
    },
    {
      title: 'Articulos',
      fragment: 'articulos',
      icon: '<i class="fa-solid fa-list"></i>'
    },
    /*
    {
      title: 'User',
      fragment: 'user',
      icon: '<i class="fa-solid fa-list"></i>'
    }
    */
  ];

  route = inject(ActivatedRoute);

  constructor(){
    console.log(this.route.fragment)
    this.route.fragment.subscribe(value => this.activeId = value);
  }

  ngOnInit(): void {
    this.onResize();
    //console.log(this.userTopMenu);
  }

  texto(it:iTopMenu) {
    const icon = it.icon === undefined ? '' : it.icon;
    const title = it.title === undefined ? '' : it.title;
    return (`${icon} ${title}`).trim();
  }

  get userTopMenu(){
    return this.links as iTopMenu[];
  }
}
