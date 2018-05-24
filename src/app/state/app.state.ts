import { State, Action, StateContext, Selector } from '@ngxs/store';
import { TutorialState } from '../tutorials/state/tutorial.state';

export class AppStateModel {
}

@State<AppStateModel>({
  name: 'AppState',
  defaults: {
    loaded: true
  },
  children: [TutorialState]
})
export class AppState {

}
