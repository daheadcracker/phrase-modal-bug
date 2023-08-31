import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { Tab2Page } from "src/app/tab2/tab2.page"
import { ExploreContainerComponent } from "src/app/explore-container/explore-container.component"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public modal: ModalController ) {}

  async openModal() {
    let modal: any = await this.modal.create({
      component: ExploreContainerComponent,
      componentProps: {}
    });
    await modal.present();
  }
}
