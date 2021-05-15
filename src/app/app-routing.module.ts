import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MalickComponent } from './malick/malick.component';
import { CappsuleComponent } from './cappsule/cappsule.component';
import { FkmComponent } from './fkm/fkm.component';
import { SavanhikeComponent } from './savanhike/savanhike.component';

const routes: Routes = [
  { path: '', component: MalickComponent},
  { path: 'Cappsule', component: CappsuleComponent},
  { path: 'Free_Kick_Master', component: FkmComponent},
  { path: 'Savanhike', component: SavanhikeComponent},
  { path: '**',   redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
