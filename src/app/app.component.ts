import { Component } from '@angular/core';
import {
  initializePhraseAppEditor,
  PhraseConfig
} from "ngx-translate-phraseapp";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    let config:PhraseConfig = {
      projectId: '00000000000000004158e0858d2fa45c',
      accountId: '0bed59e5',
      phraseEnabled: true,
      useOldICE: false,
      fullReparse: false,
      autoLowercase: false,
      debugMode: true,
    };
    initializePhraseAppEditor(config); //user: demo@phrase.com / pw: phrase
  }
}
