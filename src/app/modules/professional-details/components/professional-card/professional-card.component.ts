import { Component, Input } from '@angular/core';
import { Professional } from 'src/app/models/professional';

@Component({
  selector: 'app-professional-card',
  templateUrl: './professional-card.component.html',
  styleUrls: ['./professional-card.component.scss'],
})
export class ProfessionalCardComponent {
  @Input() professional: Professional = null;
}
