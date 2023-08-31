import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {

  @Input() name?: string;
  accountString = '';

  constructor( private _translate: TranslateService ){
    this._translate.use("de");
    this._translate.get('account.accountText').subscribe((translated: string) => {
      this.accountString = this._translate.instant('account.accountText');
    });
  }

  async ngOnInit() {}
}
