import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import { LoginComponent } from "./views/login/login.component";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterOutlet
  ],
})
export class AppComponent {

  opened = false;
  // constructor(private router: Router, private route: ActivatedRoute) {
  //   const req = JSON.stringify(window.location);
  //   if (req.search("code") > -1) {
  //     const js = JSON.parse(req);
  //     let params = new URLSearchParams(js?.search);
  //     let code = String(params.get("code")).replace("#", "");
  //     if (code.length > 10) {
  //       localStorage.setItem("code", code);
  //     }
  //   }
  // }
  //
  // ngOnInit(): void {
  //   this.router.events.subscribe((evt) => {
  //     if (!(evt instanceof NavigationEnd)) {
  //       return;
  //     }
  //     window.scrollTo(0, 0);
  //   });
  // }
}
