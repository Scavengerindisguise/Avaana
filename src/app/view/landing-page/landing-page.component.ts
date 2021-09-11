import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { HealthCardModel } from 'src/app/components/health-card/healthCard.model';
import { ratingModel } from 'src/app/components/health-card/rating.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  cardData: HealthCardModel[] = [
    {id: 1,title: "SUNBEAR SHIATSU", location: "HAWTHORN", type: "Naturopathic Consultation", price: "$50", date: Date.now(), wishlist: false},
    {id: 2,title: "SUNBEAR SHIATSU", location: "HAWTHORN", type: "Naturopathic Consultation", price: "$50", date: Date.now(), wishlist: false},
    {id: 3,title: "SUNBEAR SHIATSU", location: "HAWTHORN", type: "Naturopathic Consultation", price: "$50", date: Date.now(), wishlist: false},
    {id: 4,title: "SUNBEAR SHIATSU", location: "HAWTHORN", type: "Naturopathic Consultation", price: "$50", date: Date.now(), wishlist: false}
  ];
  

  constructor() { }

  ngOnInit(): void {

  }

}
