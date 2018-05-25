import { State, Action, StateContext, Selector } from '@ngxs/store';
import { TutorialState } from '../tutorials/state/tutorial.state';
import { AuthService } from '../core/auth/auth.service';
import { Login, Logout } from './app.actions';
import { tap } from 'rxjs/operators';

export class AppStateModel {
  token: string | null;
  username: string | null;
}

@State<AppStateModel>({
  name: 'AppState',
  defaults: {
    token: null,
    username: null
  },
  children: [TutorialState]
})
export class AppState {

  constructor(private authService: AuthService) { }

  @Action(Login)
  login({ patchState }: StateContext<AppStateModel>, payload: Login) {
    return this.authService.login(payload.username).pipe(tap((result: { token: string }) => {
      patchState({ token: result.token, username: payload.username });
    }));
  }

  @Action(Logout)
  logout({ patchState, getState }: StateContext<AppStateModel>) {
    const state = getState();
    return this.authService.logout(state.token).pipe(tap(() => {
      patchState({ token: null, username: null });
    }));
  }

}
