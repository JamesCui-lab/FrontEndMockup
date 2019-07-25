import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-work';
  people=[];
  malePets=[];
  FemalePets = [];
  constructor(private dataService:DataService){}
  ngOnInit (){
    this.dataService.fetchData().subscribe(
      (data)=> {
        this.people = data;
    
    for(var item in data){
      if(data[item].gender=="Male"){
        var petList = data[item].pets;
        if(petList!=null){
          for(var i in petList){
            if(petList[i].type == "Cat"){
              this.malePets.push(petList[i].name)
            }
          }
        }
          
      }
      else{
        var petList = data[item].pets;
        if(petList!=null){
          for(var i in petList){
            if(petList[i].type == "Cat"){
              this.FemalePets.push(petList[i].name)
            }
          }
        }
      }
  }
  this.malePets.sort();
  this.FemalePets.sort();
      }
      
    );
    
   
}
}