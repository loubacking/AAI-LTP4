import { Vehicul } from "../modules/dashboard/vehicul.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL } from "../app.api";

@Injectable()
export class VehiculsService {
  constructor(private http: HttpClient) {}

  getVehiculs(): Observable<Vehicul[]> {
    return this.http.get<Vehicul[]>(`${API_URL}/vehiculs`);
  }

  addVehiculs(veh: Vehicul) {
    this.http.post<Vehicul>(`${API_URL}/vehiculs`, veh).subscribe(() => {
      this.getVehiculs();
    });
  }

  updateVehiculs(veh: Vehicul) {
    this.http
      .put<Vehicul>(`${API_URL}/vehiculs/${veh.id}`, veh)
      .subscribe(() => {
        this.getVehiculs();
      });
  }

  deleteVehiculs(id: number) {
    this.http.delete<Vehicul>(`${API_URL}/vehiculs/${id}`).subscribe(() => {
      this.getVehiculs();
    });
  }
}
