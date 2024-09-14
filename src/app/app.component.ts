import { Component } from '@angular/core';
import { createApi } from 'unsplash-js';
import { environment } from 'src/environments/environment';
// @ts-ignore
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export default class AppComponent {
  alarmImage: string = 'assets/alarm_image.png';
  private readonly defaultImage: string = 'assets/alarm_image.png';
  private readonly activeImage: string = 'assets/alarm_image2.png';

  async toggleImage() {
    if (this.alarmImage == this.activeImage) return;
    this.alarmImage = this.activeImage;
    const report = {
      "address": "Dentro del bus",
      "incident": "Botón de pánico",
      "trackingLink": "https://maps.app.goo.gl/PsJQiVvKxLcFXiEM9",
      "image": "Imagen",
      "unitId": environment.UNIT_ID
    };

    try {
      const unsplashAPI= environment.UNSPLASH_API_KEY;
      const response = await axios.post(unsplashAPI, report, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    setTimeout(() => {
      this.alarmImage = this.defaultImage;
    }, 5 * 60 * 1000); // 5 minutos
  }
}
