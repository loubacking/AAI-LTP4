import { ContactComponent } from "./modules/contact/contact.component";
import { SubmitComponent } from "./modules/submit/submit.component";
import { VehiculComponent } from "./modules/vehicul/vehicul.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/home/home.component";
import { GridComponent } from "./modules/grid/grid.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { CreateComponent } from './modules/dashboard/create/create.component';
import { EditComponent } from './modules/dashboard/edit/edit.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "vehicul", component: VehiculComponent },
  { path: "grid", component: GridComponent },
  { path: "submit", component: SubmitComponent },
  { path: "contact", component: ContactComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboard/create", component: CreateComponent },
  { path: "dashboard/edit", component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
