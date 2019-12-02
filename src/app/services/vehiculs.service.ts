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

  getVehicul(id: number): Observable<Vehicul> {
    return this.http.get<Vehicul>(`${API_URL}/vehiculs/${id}`);
  }

  addVehiculs(veh: Vehicul): Observable<Vehicul>  {
    return this.http.post<Vehicul>(`${API_URL}/vehiculs`, veh);
  }

  updateVehiculs(veh: Vehicul): Observable<Vehicul> {
    return this.http
      .put<Vehicul>(`${API_URL}/vehiculs/${veh.id}`, veh);
  }

  deleteVehiculs(id: number): Observable<Vehicul>  {
    return this.http.delete<Vehicul>(`${API_URL}/vehiculs/${id}`)
  }
}
