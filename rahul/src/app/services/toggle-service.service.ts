import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleServiceService {
toggleoption:boolean=true
  toggleChange(){
    var change=document.getElementById('abc');
    if(change?.getAttribute('hidden')==null){
      change?.setAttribute('hidden','')
      this.toggleoption=false
    }else{
      change?.removeAttribute('hidden')
      this.toggleoption=true
    }
  }
}
