import {Routes} from '@angular/router';

import {StartComponent} from './start/start.component';
import {GameComponent} from './game/game.component';
import {EndComponent} from './end/end.component';

export const appRoutes: Routes = [
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'end',
    component: EndComponent
  },
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  }

];
