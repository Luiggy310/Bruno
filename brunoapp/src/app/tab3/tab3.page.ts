import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonSearchbar } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { IonButton,IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { airplane, carSport, boat, bicycle,
  calendarClear,settings, call, location, chatbubbleEllipses } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,
    IonSearchbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar,
    IonIcon, IonButton
  ],
})
export class Tab3Page {
  constructor() {
    addIcons({ airplane, carSport, boat, bicycle ,
      calendarClear,settings, call, location, chatbubbleEllipses
     });
  }
}
