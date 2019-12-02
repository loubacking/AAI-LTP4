import { Component, OnInit } from "@angular/core";
import { Vehicul } from "./vehicul.model";
import { VehiculsService } from "../../services/vehiculs.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  providers: [VehiculsService]
})
export class DashboardComponent implements OnInit {
  selectVehicul: Vehicul = new Vehicul();

  vehiculs: Vehicul[];

  constructor(private vehiculsService: VehiculsService, private router: Router) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.vehiculsService
      .getVehiculs()
      .subscribe((vehiculs) => (this.vehiculs = vehiculs));
  }

  updateVehiculs(id: number) {
    this.router.navigate(['/dashboard/edit'], {queryParams: { id }})
  }

  deleteVehiculs(id: number) {
    this.vehiculsService.deleteVehiculs(id).subscribe(() => this.fetchData());
  }
}
