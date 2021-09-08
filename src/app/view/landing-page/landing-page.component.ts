import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { HealthCardModel } from 'src/app/components/health-card/healthCard.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  cardData: HealthCardModel[] = [
    {title: "SUNBEAR SHIATSU", location: "HAWTHORN", type: "Naturopathic Consultation", price: "$50 / hour", date: Date.now()},
    {title: "SUNBEAR SHIATSU", location: "HAWTHORN", type: "Naturopathic Consultation", price: "$50 / hour", date: Date.now()},
    {title: "SUNBEAR SHIATSU", location: "HAWTHORN", type: "Naturopathic Consultation", price: "$50 / hour", date: Date.now()},
    {title: "SUNBEAR SHIATSU", location: "HAWTHORN", type: "Naturopathic Consultation", price: "$50 / hour", date: Date.now()},
  ];
  faSearch = faSearch;
  

  constructor() { }

  ngOnInit(): void {

  }

}
