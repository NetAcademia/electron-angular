import {Component} from '@angular/core';
import {ElectronService} from 'ngx-electron';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages$: Observable<string>;

  constructor(private electronService: ElectronService, private store: Store<AppState>) {
    this.messages$ = this.store.select('message');
  }

  engMessage() {
    this.store.dispatch( { type: 'ENG' } );
  }
  hunMessage() {
    this.store.dispatch( { type: 'HUN' } );
  }
  resetMessage() {
    this.store.dispatch( { type: 'RESET' } );
  }

  openPage() {
    this.electronService.shell.openExternal('http://netacademia.hu');
  }
}
