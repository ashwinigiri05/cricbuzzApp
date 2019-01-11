import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminformComponent } from './admin/adminform/adminform.component';
import { PlayerlistComponent } from './admin/playerlist/playerlist.component';
import { AdminSummeryComponent } from './admin/admin-summery/admin-summery.component';

import { HeaderComponent } from './header/header.component';
import { ScorCardComponent } from './scor-card/scor-card.component';
import { CommentryComponent } from './commentry/commentry.component';

const routes: Routes = [
  {path:'',redirectTo:'header',pathMatch:'full'},
  {
    path:'admin',
   component:AdminComponent,
   children:[
     {path:'adminform',component:AdminformComponent},
     {path:'playerlist',component:PlayerlistComponent},
     {
         path:'admin-summery',
         component:AdminSummeryComponent,
        children:[
          
        ]},
     
   ]},
   
  {path:'ScorCard',component:ScorCardComponent},
  {path:'Commentry',component:CommentryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// { path: '', redirectTo: 'todo', pathMatch: 'full' },
//   {path:'todo',
//    component:TodoComponent,
//    children:[
//     {path:'new',component:TodoFormComponent},
//     {path:'edit/:id',component:EditFormComponent}
//   ]},