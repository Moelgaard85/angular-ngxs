import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { Tutorial } from '../shared/tutorial.model';
import { AddTutorial, RemoveTutorial, InitTutorialState } from './tutorial.actions';
import { PouchdbService } from '../../core/pouchdb/pouchdb.service';
import { tap, map } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';

export class TutorialStateModel {
  tutorials: Tutorial[];
}

@State<TutorialStateModel>({
  name: 'TutorialState',
  defaults: {
    tutorials: []
  }
})
export class TutorialState {
  constructor(private pouchdbService: PouchdbService) { }
  // @Selector()
  // static getTutorials(state: TutorialStateModel) {
  //   return state.tutorials;
  // }

  @Action(InitTutorialState)
  initTutorialState({ getState, patchState }: StateContext<TutorialStateModel>) {
    console.log('TutorialState: InitTutorialState called');

    return this.pouchdbService.getAllData()
      .pipe(
        map(data => map((dataRow: any) => {
          const docs = [];

          dataRow.rows.forEach(doc => {
            docs.push(doc);
          });
          return docs;
        })),
        tap((result: any) => {
          console.log('TutorialState: InitTutorialState: result: ', result);

          const state = getState();
          patchState({
            tutorials: [...state.tutorials, result]
          });
        })
      );
  }

  @Action(AddTutorial)
  add({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: AddTutorial) {
    console.log('TutorialState: AddTutorial: payload: ', payload);

    return this.pouchdbService.addData(payload)
      .pipe(
        tap((result: Tutorial) => {
          console.log('TutorialState: AddTutorial: result: ', result);
          const state = getState();
          patchState({
            tutorials: [...state.tutorials, result]
          });
        }));
  }

  @Action(RemoveTutorial)
  remove({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: RemoveTutorial) {

    return this.pouchdbService.removeData(payload)
      .pipe(
        tap(result => {
          console.log('TutorialState: RemoveTutorial: result: ', result);
          patchState({
            tutorials: getState().tutorials.filter(a => a._id !== payload)
          });
        })
      );
  }

}
