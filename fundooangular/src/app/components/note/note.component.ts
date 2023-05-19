import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note-service/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private note:NoteService) { }
  Notes:any=[];

  ngOnInit(): void {
this.getNotes();
  }
  getNotes(){
    
    this.note.getNotes().subscribe((res:any)=>{
      console.log(res);
      //isArchieved

this.Notes=res.data.filter((e:any)=>{
  return e.isArchieved===false && e.trash===false
})

    })
  }

}
