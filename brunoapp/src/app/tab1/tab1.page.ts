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
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,
    IonSearchbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar,
    IonIcon, IonButton
  ],
})
export class Tab1Page {
  constructor() {
    addIcons({ airplane, carSport, boat, bicycle ,
      calendarClear,settings, call, location, chatbubbleEllipses
     });
  }
}
