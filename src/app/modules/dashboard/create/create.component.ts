import { Component, OnInit } from '@angular/core';
import { Vehicul } from '../vehicul.model';
import { VehiculsService } from 'src/app/services/vehiculs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [VehiculsService]
})
export class CreateComponent implements OnInit {

  selectVehicul: Vehicul = new Vehicul();

  vehiculs: Vehicul[];

  constructor(private vehiculsService: VehiculsService, private router: Router) {}

  ngOnInit() {
    this.fetchData()
  }

  fetchData() {
    this.vehiculsService
      .getVehiculs()
      .subscribe((vehiculs) => (this.vehiculs = vehiculs));
  }

  newVehicul() {
    this.selectVehicul = new Vehicul();
  }

  createVehicul() {
    this.vehiculsService.addVehiculs(this.selectVehicul).subscribe(() => {
      this.router.navigate(['/dashboard'])
    });
  }

}
