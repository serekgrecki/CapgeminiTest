import { Component } from '@angular/core';
import { GlobalDataService } from 'src/app/core/services/global.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navbarOpen = false;
  constructor(public globalService: GlobalDataService,
    private router: Router,
    private toastr: ToastrService) {}
  public toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  public Logout() {
    this.globalService.userName = null;
    this.toastr.success('Successful logout message');
    this.router.navigate(['login']);
   }

}
