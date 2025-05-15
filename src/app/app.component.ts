import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'TodoApp';
  currRouter: string = 'home';

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    if (this.router.url === '/') {
      this.router.navigateByUrl('/home');
    }
  }

  goToHome() {
    this.currRouter = 'home';
    this.router.navigateByUrl('/home');
  }

  goToAbout() {
    this.currRouter = 'about';
    this.router.navigateByUrl('/about');
  }

  goToProducts() {
    this.currRouter = 'products';
    this.router.navigateByUrl('/products');
  }
}
