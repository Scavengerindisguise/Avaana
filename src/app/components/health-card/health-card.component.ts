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
  value = 0;
  starList: ratingModel[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i <= 4; i++) {
      if (i <= this.value) {
        this.starList.push({ style: "fa fa-star", id: i });
      } else {
        this.starList.push({ style: "fa fa-star-o", id: i });
      }
    }
  }

  rateStar(index) {
   this.starList.map(star => {
      if (index=== star.id || index >= star.id) {
        for(let i=1; i <= star.id; i++) {
          star.style = "fa fa-star";
        }
      } else if (index <= star.id) {
        star.style = "fa fa-star-o";
      }
      return star;
    });
 
  }

  addToWishlist(card) {
    this.cardData.map(item => {
      if (card.id === item.id) {
        item.wishlist = !item.wishlist;
      }
      return item;
    })
  }

}
