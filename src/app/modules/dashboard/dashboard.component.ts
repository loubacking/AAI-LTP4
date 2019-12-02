import { Component, OnInit } from "@angular/core";
import { Vehicul } from "./vehicul.model";
import { VehiculsService } from "../../services/vehiculs.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  providers: [VehiculsService]
})
export class DashboardComponent implements OnInit {
  selectVehicul: Vehicul = new Vehicul();

  vehiculs: Vehicul[];

  constructor(private vehiculsService: VehiculsService) {}

  ngOnInit() {
    this.vehiculsService
      .getVehiculs()
      .subscribe((vehiculs) => (this.vehiculs = vehiculs));
  }

  newVehicul() {
    this.selectVehicul = new Vehicul();
  }

  createVehicul() {
    this.vehiculsService.addVehiculs(this.selectVehicul);
  }

  deleteVehiculs(id: number) {
    this.vehiculsService.deleteVehiculs(id);
  }
}
