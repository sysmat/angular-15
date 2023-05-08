import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub',
  standalone: true,
  template: `
    {{orgId}}
  `,
})
export class SubComponent implements OnInit {
  orgId: number = 0;
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.orgId = +this.route?.snapshot?.paramMap?.get('id')!;
  }
}
