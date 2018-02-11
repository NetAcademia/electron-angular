import {Component} from '@angular/core';
import {ElectronService} from 'ngx-electron';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Post} from './models/post.model';
import {GetPost} from './actions/post.actions';

interface AppState {
  message: string;
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages$: Observable<string>;
  post$: Observable<Post>;

  constructor(private electronService: ElectronService, private store: Store<AppState>) {
    this.messages$ = this.store.select('message');
    this.post$ = this.store.select('post');
  }

  loadPost() {
    this.store.dispatch(new GetPost('asdfsda'));
  }

  vote(p: Post, number: number) {

  }

  engMessage() {
    this.store.dispatch({type: 'ENG'});
  }

  hunMessage() {
    this.store.dispatch({type: 'HUN'});
  }

  resetMessage() {
    this.store.dispatch({type: 'RESET'});
  }

  openPage() {
    (<any>this.electronService.shell).openExternal('http://netacademia.hu');
  }

}
