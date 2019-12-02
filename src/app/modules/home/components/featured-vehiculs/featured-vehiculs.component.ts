import { Component, OnInit } from "@angular/core";
import { Vehicul } from "src/app/modules/dashboard/vehicul.model";
import { VehiculsService } from "src/app/services/vehiculs.service";

@Component({
  selector: "app-featured-vehiculs",
  templateUrl: "./featured-vehiculs.component.html",
  styleUrls: ["./featured-vehiculs.component.css"],
  providers: [VehiculsService]
})
export class FeaturedVehiculsComponent implements OnInit {
  vehiculs: Vehicul[];

  constructor(private vehiculsService: VehiculsService) {}

  ngOnInit() {
    this.vehiculsService
      .getVehiculs()
      .subscribe((vehiculs) => (this.vehiculs = vehiculs));
  }
}
