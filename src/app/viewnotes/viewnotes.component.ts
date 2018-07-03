import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetlocalnotesdataService } from '../getlocalnotes.service';
import { GetnotesdataService } from '../getnotesdata.service';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-viewnotes',
  templateUrl: './viewnotes.component.html',
  styleUrls: ['./viewnotes.component.css']
})
export class ViewnotesComponent implements OnInit {
  notesData: any;
  responsedata: any;
  action = 'close';
  constructor(
    private getlocalNotes: GetlocalnotesdataService,
    private notes_service: GetnotesdataService,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.notesData = this.getlocalNotes.getNotesInfo();
    console.log('notesdata', this.notesData);
  }

  sendata(content, note_details): void {
    console.log(content + note_details);
    this.notes_service.savenotes(content, note_details).subscribe(
      (resp) => {
        this.responsedata = resp;
        console.log(this.responsedata);
        this.snackBar.open(this.responsedata.message, this.action, { duration: 2000 });
      });
  }

  notes_back(): void {
    this.router.navigate(['notesinfo']);
  }

}
