import { Component,ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonSearchbar } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonModal } from '@ionic/angular/standalone';
import { IonButton,IonIcon, IonButtons, IonInput, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components'
import { addIcons } from 'ionicons';
import { airplane, carSport, boat, bicycle,
  calendarClear,settings, call, location, chatbubbleEllipses } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,
    IonSearchbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar,
    IonIcon, IonButton, FormsModule, IonButtons, IonModal, IonInput, IonItem, IonList, IonSelect, IonSelectOption
  ],
})
export class Tab2Page {
  @ViewChild(IonModal) modal!: IonModal;

  message = 'User e-mail:';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `User e-mail: ${event.detail.data}`;
    }
  }

  constructor() {
    addIcons({ airplane, carSport, boat, bicycle ,
      calendarClear,settings, call, location, chatbubbleEllipses
     });
  }
}