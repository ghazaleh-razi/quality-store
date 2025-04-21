import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { User } from '../../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = 'assets/data/users.json';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      map((users) => {
        const user = users.find(
          (u) => u.username === username && u.password === password
        );
        if (user) {
          localStorage.setItem('isAuthenticated', 'true');
          this.isAuthenticatedSubject.next(this.isLoggedIn()); 
          return true;
        }
        return false;
      }),
      catchError((error) => {
        console.error('AuthService - Error during login:', error);
        return of(false);
      })
    );
  }
  
  logout(): void {
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticatedSubject.next(this.isLoggedIn()); 
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    return isAuthenticated;
  }
}