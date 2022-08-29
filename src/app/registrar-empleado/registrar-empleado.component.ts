import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { Empleados } from '../empleados';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado : Empleados = new Empleados();
  constructor(private empleadoServicio:EmpleadoService,private router:Router) { }


  ngOnInit(): void {
   
  }
  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpleados();
    },error => console.log(error));
  }

  irALaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
    swal('Empleado registrado',`El empleado ${this.empleado.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarEmpleado();
  }

}
function swal(arg0: string, arg1: string, arg2: string) {
  throw new Error('Function not implemented.');
}

