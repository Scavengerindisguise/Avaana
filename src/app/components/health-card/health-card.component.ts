import { Component, Input, OnInit } from '@angular/core';
import { HealthCardModel } from './healthCard.model';
import { ratingModel } from './rating.model';

@Component({
  selector: 'app-health-card',
  templateUrl: './health-card.component.html',
  styleUrls: ['./health-card.component.css']
})
export class HealthCardComponent implements OnInit {
  @Input() cardData: HealthCardModel[];
  currentValue = 0;

  constructor() { }

  ngOnInit(): void {
    this.addRatingValues();
  }
  
  // Add Stars to rating array
  addRatingValues() {
    for (let j = 0; j < this.cardData.length; j++) {
      for (let i = 0; i <= 4; i++) {
        if (i <= this.currentValue) {
          this.cardData[j].ratingList.push({ id: i, style: "fa fa-star" });
        } else {
          this.cardData[j].ratingList.push({ id: i, style: "fa fa-star-o" });
        }
      }
    }
  }

  // Provide rating when hovering over the stars
  rateStar(selectedCard, index) {
    this.cardData.map(card => {
      if (card.id === selectedCard.id) {
        card.ratingList.map(rating => {
          if (rating.id === index) {
            rating.style = 'fa fa-star';
          } else {
            rating.style = 'fa fa-star-o';
          }
          if (index > rating.id) {
            for (let i = 0; i <= rating.id; i++) {
              rating.style = 'fa fa-star';
            }
          }
        });
      }
    });
  }

  // Add to wishlist logic
  addToWishlist(card) {
    this.cardData.map(item => {
      if (card.id === item.id) {
        item.wishlist = !item.wishlist;
      }
      return item;
    })
  }

}
