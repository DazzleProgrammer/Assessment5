import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleServiceService } from 'src/app/services/toggle-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  // before:boolean=false

  constructor(private router:Router,private xyz:ToggleServiceService) { }

  ngOnInit() {

    var authentication=localStorage.getItem('message')
    if(authentication!='login sucessfully'){
      this.router.navigateByUrl('/')
    }
    
    // if(this.xyz.toggleoption==true){
    //   this.before=true
    // }else{
    //   this.before=false
    // }
  }


}
