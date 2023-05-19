import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note-service/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  isShow:boolean=false;
  title:string='';
  desc:string='';
  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
  }
show(){
  this.isShow=true
}
close(){
  this.isShow=false
 if(this.title=='' && this.desc==''){
  return ;
 }
  let data={
    title:this.title,
    description:this.desc
  }
  this.title='';
  this.desc='';
  this.noteService.AddNote(data).subscribe((response:any)=>{
    console.log(response)
  })

}
}
