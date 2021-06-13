import { User } from './../../models/user.model';
import { userService } from './../../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  dataSource:User[]=[];
  form:FormGroup;
  view=false;

  constructor(
    private fb:FormBuilder,
    private userSrv:userService,
    private router:Router
  ) {
    this.form = this.fb.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      age:['',Validators.required],
      email:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  save(){
    if(!this.form.valid){
      return   Swal.fire('Erro','','error');
    }
    const data = new User().deserialize(this.form.value);
    this.userSrv.postUser(data).subscribe(resp=>{
    if(resp){
      Swal.fire('Usuario Creado Con Exito','','success');
    }
  });
  }

  getUser(){
   this.userSrv.getUser().subscribe(resp=>{
     if(resp){
       this.view=true;
       this.dataSource=resp;
     }
   })
  }
}
