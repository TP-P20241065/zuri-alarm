import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
})
export class AppComponent {
  alarmImage: string = 'assets/alarm_image.png';
  private readonly defaultImage: string = 'assets/alarm_image.png';
  private readonly activeImage: string = 'assets/alarm_image2.png';

  toggleImage() {
    this.alarmImage = this.activeImage;
    setTimeout(() => {
      this.alarmImage = this.defaultImage;
    }, 5 * 60 * 1000); // 5 minutos
  }
}
