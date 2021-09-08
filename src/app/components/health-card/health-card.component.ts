import { Component, Input, OnInit } from '@angular/core';
import { HealthCardModel } from './healthCard.model';

@Component({
  selector: 'app-health-card',
  templateUrl: './health-card.component.html',
  styleUrls: ['./health-card.component.css']
})
export class HealthCardComponent implements OnInit {
  @Input() cardData: HealthCardModel[];
  // currentDate = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
