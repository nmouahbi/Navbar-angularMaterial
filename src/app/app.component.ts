import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  // displayNavbar: string;
  isVisible: boolean = true;


  ngOnInit() {
    // this.displayNavbar = '1';
  }
}
