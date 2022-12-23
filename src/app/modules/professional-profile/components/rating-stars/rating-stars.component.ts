import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss'],
})
export class RatingStarsComponent {
  @Input() rating: number | null = null;

  getRatingStars(value: number): boolean[] {
    const floor = Math.floor(value);
    const stars = [...Array(5).keys()].map((item) => item + 1 <= floor);
    return stars;
  }
}
