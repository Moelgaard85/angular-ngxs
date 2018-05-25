import { State, Action, StateContext, Selector } from '@ngxs/store';
import { TutorialState } from '../tutorials/state/tutorial.state';

export class AppStateModel {
  title: string;
  color: string;
}

@State<AppStateModel>({
  name: 'AppState',
  defaults: {
    title: 'This is the App State',
    color: '#343434'
  },
  children: [TutorialState]
})
export class AppState {

}
