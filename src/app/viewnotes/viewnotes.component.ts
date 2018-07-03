import { Component, OnInit } from '@angular/core';
import { GetlocalnotesdataService } from '../getlocalnotes.service';

@Component({
  selector: 'app-viewnotes',
  templateUrl: './viewnotes.component.html',
  styleUrls: ['./viewnotes.component.css']
})
export class ViewnotesComponent implements OnInit {
  notesData: any;
  constructor(
    private getlocalNotes: GetlocalnotesdataService
  ) { }

  ngOnInit() {
    this.notesData = this.getlocalNotes.getNotesInfo();
    console.log('notesdata', this.notesData);
  }

}
