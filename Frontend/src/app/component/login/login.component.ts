import { Component } from '@angular/core';
import { GlobalDataService } from 'src/app/core/services/global.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public userName: string;
  constructor(private globalService: GlobalDataService,
    private router: Router,
    private toastr: ToastrService) {
    this.userName = '';
  }
  public Login() {
    this.globalService.userName = this.userName;
    this.toastr.success('Successful login message');
    this.router.navigate(['customer']);
  }
}
