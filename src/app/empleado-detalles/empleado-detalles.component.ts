import swal from'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { Empleados } from '../empleados';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {
  id: number;
  empleado: Empleados;

  constructor(private route: ActivatedRoute, private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleados();
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe(dato => {
    this.empleado = dato;
    swal(`detalles del empleado ${this.empleado.nombre}`);

    });
  }

}



