import { Component, Input } from '@angular/core';
import { Professional } from 'src/app/models/professional';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.scss'],
})
export class ProfessionalProfileComponent {
  @Input() professional: Professional = null;
}
