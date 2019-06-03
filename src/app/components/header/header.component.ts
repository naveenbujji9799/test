import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title;
  @Input() showBackButton = false;
  @Input() showMenu = false;
  @Input() showSubHeader = false;
  @Input() showCart = false;

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  goToPage(pageName) {
    this.router.navigateByUrl(pageName);
  }

}
