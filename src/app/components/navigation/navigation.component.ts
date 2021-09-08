import { Component, OnInit } from '@angular/core';
import { faHeartbeat, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faHeartBeat = faHeartbeat;
  navbarOpen = false;
  

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
