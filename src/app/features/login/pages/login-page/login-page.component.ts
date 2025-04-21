import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  username = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (!this.username || !this.password) {
      this.errorMessage = 'لطفاً نام کاربری و رمز عبور را وارد کنید.';
      return;
    }

    this.isLoading = true;
    this.authService.login(this.username, this.password).subscribe({
      next: (success) => {
        this.isLoading = false;
        if (success) {
          this.errorMessage = '';
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'نام کاربری یا رمز عبور اشتباه است.';
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = 'خطایی در سرور رخ داده است. لطفاً دوباره تلاش کنید.';
        console.error(err);
      },
    });
  }
}