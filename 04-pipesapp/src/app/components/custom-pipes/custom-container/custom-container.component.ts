import { Component, OnInit } from '@angular/core';
import { TemperatureValues } from 'src/app/shared/enums/temperature.enum';
import { DarkModeService } from '../../../shared/services/dark-mode.service';

@Component({
  selector: 'app-custom-container',
  templateUrl: './custom-container.component.html',
  styleUrls: ['./custom-container.component.css'],
})
export class CustomContainerComponent implements OnInit {
  grados: number = 12;

  tipo: TemperatureValues = TemperatureValues.F;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {}

  get dark() {
    return this.darkModeService.dark;
  }

  changeMode() {
    this.darkModeService.changeMode();
  }
}
