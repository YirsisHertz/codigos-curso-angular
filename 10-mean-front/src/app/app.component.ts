import { Component } from '@angular/core';
import { SwPush } from "@angular/service-worker";
import { environment } from "../environments/environment"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-front';

  constructor( readonly swPush: SwPush ){
    this.startPushNotifications()
  }

  private async startPushNotifications() {

    try {
      
      const sub = await this.swPush.requestSubscription({
        serverPublicKey: environment.PUBLIC_VAPID_KEY_OF_SERVER,
      });

      console.log(sub)

    } catch (err) {
      console.error('Could not subscribe due to:', err);
    }
    
  }

}
