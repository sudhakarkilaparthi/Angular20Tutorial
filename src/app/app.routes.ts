import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './control-flow/control-flow';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { AttDirective } from './att-directive/att-directive';

export const routes: Routes = [
      {
            path:'admin',component:Admin
      },
      {
            path:'control-flow-statement', component:ControlFlow
      },
      {
            path:'user',component:User
      },
      {
            path:'data-binding',component:DataBinding
      },
      {
            path:'signal-ex',component:SignalEx
      },
      {
            path:'attribute-dir', component:AttDirective
      }
];
