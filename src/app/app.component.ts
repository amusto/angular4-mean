import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../assets/css/styles.css',
    '../assets/css/sticky-footer-navbar.css'
  ]
})

export class AppComponent implements OnInit {
  public constructor(private titleService: Title ) { }
  siteTitle = 'ng4 - Movie Manager';

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit(): void {
    this.setTitle( this.siteTitle );
  }

}
