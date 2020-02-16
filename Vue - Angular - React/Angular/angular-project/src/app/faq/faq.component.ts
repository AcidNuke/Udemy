import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent implements OnInit {

  faqs: Object;

  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(res => this.faqs = res);
  }

  ngOnInit(): void {
  }

}
