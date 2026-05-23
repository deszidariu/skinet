import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  baseUrl='http://localhost:5000/api/';
  
  //private http = inject(HttpClient); // another way to inject services in components
  
  constructor(private http: HttpClient) {

  }  

  ngOnInit(): void {
    // Initialization logic here

    this.http.get(this.baseUrl + 'products').subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
      complete: () => console.log('Request completed')
    });
  }
}
