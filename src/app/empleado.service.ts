import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleados } from './empleados';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  //esta url obtiene todo el listado de los empleados en el backend
  private baseURL= "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient: HttpClient) { }

  //este metodo nos sirve para obtener los empleados
  obtenerListaDeEmpleados():Observable<Empleados[]>{

  return this.httpClient.get<Empleados[]>(`${this.baseURL}`);
  }
  //este metodo sirve para obtener o buscar un empleado
  obtenerEmpleadoPorId(id:number):Observable<Empleados>{
    return this.httpClient.get<Empleados>(`${this.baseURL}/${id}`);
  }
  eliminarEmpleado(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


  //este metodo sirve para actualizar el empleado
  actualizarEmpleado(id:number,empleado:Empleados) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
  }
//este metodo nos sirve para registrar un empleado
registrarEmpleado(empleado:Empleados) : Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,empleado);
}
}