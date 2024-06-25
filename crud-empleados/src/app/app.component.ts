import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-empleados';

  empleados=[
    {name:'Hugo',age:19,position:'Programador Jr.' ,salary:10000,email:'hugo@disney.com'},
    {name:'Paco',age:21,position:'Programador Sr.' ,salary:18000,email:'paco@disney.com'},
    {name:'Luis',age:17,position:'Tester' ,salary:8000,email:'Luis@disney.com'}
  ]
  modelo:any={};
  modelo2:any={};
    empleado:any={};
    i:number=0;

    msg:string='';



  addEmpleado():void{
    this.empleados.push(this.modelo)
    this.modelo={};
    this.msg='Registro agregado'

  }
  deleteEmpleado(i:any):void{
    this.empleados.splice(i,1);
    this.msg='Registro eliminados '

  }
  myValue:number=0;
  editEmpleado(i:number):void{
    this.modelo2.name= this.empleados[i].name;
    this.modelo2.age= this.empleados[i].name;
    this.modelo2.position= this.empleados[i].position;
    this.modelo2.salary= this.empleados[i].salary;
    this.modelo2.email= this.empleados[i].email;
    this.myValue= i; 

  }
  updateEmpleado():void{
    let i= this.myValue;
    this.empleados[i]= this.modelo2;
    this.modelo2={};
    this.msg="Registro actualizado!";
  


  }

  closeAlert():void{
    this.msg='';
  }

}
