import { Component, OnInit } from '@angular/core';
import { VehiculsService } from 'src/app/services/vehiculs.service';
import { Vehicul } from '../vehicul.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [VehiculsService]
})
export class EditComponent implements OnInit {
  vehiculs: Vehicul;

  constructor(private vehiculsService: VehiculsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.vehiculsService.getVehicul(params.id)
        .subscribe(vehiculs => this.vehiculs = vehiculs);
      });
  }

  editVehicul() {
    this.vehiculsService.updateVehiculs(this.vehiculs).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }

}
