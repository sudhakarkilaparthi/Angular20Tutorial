import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './control-flow/control-flow';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { AttDirective } from './att-directive/att-directive';
import { GetApi } from './get-api/get-api';
import { ReactiveUser } from './reactive-user/reactive-user';

export const routes: Routes = [
      {
            path: 'admin', component: Admin
      },
      {
            path: 'control-flow-statement', component: ControlFlow
      },
      {
            path: 'user', component: User
      },
      {
            path: 'data-binding', component: DataBinding
      },
      {
            path: 'signal-ex', component: SignalEx
      },
      {
            path: 'attribute-dir', component: AttDirective
      },
      {
            path: 'get-api', component: GetApi
      },
      {
            path: 'reactive-users', component: ReactiveUser
      }
];
