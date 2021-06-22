import { Component, OnInit ,Renderer2,ElementRef } from '@angular/core';
import { $ } from 'protractor';
import {EducationServviceService} from './education-servvice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  grade
  dataOfTable
  extraButton=false
  extraButtonValue
  yearlySelected
  monthlySelected
  selectedGrade="Grade 6"
  eventValue
  typeOfSylabus
  constructor(public EducationServviceService:EducationServviceService,private render:Renderer2,private elRef: ElementRef){}

  ngOnInit(): void {
    this.EducationServviceService.getMonthly().subscribe((result)=>{
      this.grade=result;
      this.extraButton=false;
     this.dataOfTable=result[0].boards.general;
     this.monthlySelected=true
     this.yearlySelected=false
      console.log(this.dataOfTable)
    })
  }
  getMonthly(event){
    if(event.target.parentElement.querySelector(".selected")!=null){
      event.target.parentElement.querySelector(".selected").classList.remove("selected")
    }
   
    this.render.addClass(event.target,"selected");
    this.EducationServviceService.getMonthly().subscribe((result)=>{
      this.grade=result;
      this.extraButton=false;
     this.dataOfTable=result[0].boards.general;
     this.monthlySelected=true
     this.yearlySelected=false
      console.log(this.dataOfTable)
    })
  }
  getYearly(event){
    if(event.target.parentElement.querySelector(".selected")!=null){
      event.target.parentElement.querySelector(".selected").classList.remove("selected")
    }
   
    this.render.addClass(event.target,"selected");
    this.EducationServviceService.getYearly().subscribe((result)=>{
      this.grade=result;
      this.extraButtonValue=[];
      this.extraButton=true;
      this.dataOfTable=result[0].boards.CBSE;
      for(var key in result[0].boards){
        this.extraButtonValue.push( key);  
      }
      this.typeOfSylabus=typeof(result[0].boards.CBSE[0].syllabus[0])
      this.yearlySelected=true
      this.monthlySelected=false
  })
  }

  extraButtonValuesClick(e,event){
    if(event.target.parentElement.querySelector(".selected")!=null){
      event.target.parentElement.querySelector(".selected").classList.remove("selected")
    }
   
    this.render.addClass(event.target,"selected");
    this.eventValue=e;
    this.grade.filter(value=>{
      
      if(value.grade==this.selectedGrade && this.eventValue=="CBSE"){
        this.dataOfTable=value.boards.CBSE;
        this.typeOfSylabus=typeof(value.boards.CBSE[0].syllabus[0])
      }
      if(value.grade==this.selectedGrade && this.eventValue=="JEE_Main"){
        this.dataOfTable=value.boards.JEE_Main;
        this.typeOfSylabus=typeof(value.boards.JEE_Main[0].syllabus[0])
      }
      if(value.grade==this.selectedGrade && this.eventValue=="JEE_Main_Advanced"){
        this.dataOfTable=value.boards.JEE_Main_Advanced;
        this.typeOfSylabus=typeof(value.boards.JEE_Main_Advanced[0].syllabus[0])
      } 
      if(value.grade==this.selectedGrade && this.eventValue=="NTSE"){
        this.dataOfTable=value.boards.NTSE;
        this.typeOfSylabus=typeof(value.boards.NTSE[0].syllabus[0])
      } 
      if(value.grade==this.selectedGrade && this.eventValue=="ICSE"){
        this.dataOfTable=value.boards.ICSE;
        this.typeOfSylabus=typeof(value.boards.ICSE[0].syllabus[0])
      } 
      if(value.grade==this.selectedGrade && this.eventValue=="Advance_Level"){
        this.dataOfTable=value.boards.Advance_Level;
        this.typeOfSylabus=typeof(value.boards.Advance_Level[0].syllabus[0])
      } 
  })
  }

gradeFilter(e){
  this.grade.filter(value=>{
    if(value.grade==e){
      this.selectedGrade=e;
      if(value.boards.general!=undefined){
        this.extraButton=false;
        this.dataOfTable=value.boards.general
      }
      else{
        this.extraButton=true;
        this.extraButtonValue = [];
        for(var key in value.boards){
          this.extraButtonValue.push( key);
            
        }
        console.log(value.boards)
        this.dataOfTable=value.boards.CBSE;
        this.typeOfSylabus= typeof(value.boards.CBSE[0].syllabus[0])
      }
    }
})
}
  

}
