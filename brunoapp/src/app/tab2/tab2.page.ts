import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonSearchbar } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar
  ]

})
export class Tab2Page {

  constructor() {}

}