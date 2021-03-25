import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color-page',
  templateUrl: './color-page.component.html',
  styleUrls: ['./color-page.component.scss'],
})
export class ColorPageComponent implements OnInit {
  public attribute: string;
  public color: string;

  constructor(private route: ActivatedRoute) {
    this.attribute = '';
    this.color = 'black';
  }

  private colorCharger(attribute: string) {
    switch (attribute.toLocaleLowerCase()) {
      case 'egg': {
        this.color = 'red';
        break;
      }
      case 'bunny': {
        this.color = 'orange';
        break;
      }
      case 'chicken': {
        this.color = 'dark-blue';
        break;
      }
      case 'rabbit': {
        this.color = 'pink';
        break;
      }
      case 'candle': {
        this.color = 'turquoise';
        break;
      }
    }
  }

  ngOnInit(): void {
    const routeAttribute = this.route.snapshot.paramMap.get('attribute');
    if (routeAttribute) {
      this.attribute = routeAttribute;
      this.colorCharger(this.attribute);
    }
  }
}
