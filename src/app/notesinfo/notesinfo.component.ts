import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetnotesdataService } from '../getnotesdata.service';
import { GetlocalnotesdataService } from '../getlocalnotes.service';

@Component({
  selector: 'app-notesinfo',
  templateUrl: './notesinfo.component.html',
  styleUrls: ['./notesinfo.component.css']
})
export class NotesinfoComponent implements OnInit {

  uid: number;
  notesdata: String;
  constructor(
    private router: Router,
    private getnotes: GetnotesdataService,
    private getlocalNotes: GetlocalnotesdataService
  ) { }

  ngOnInit() {
  }

  open(): void {
    if (this.uid != null) {
      console.log(this);
      this.getnotes.fetchnotes(this.uid).subscribe(
        response => {
            console.log(response.json());
            this.notesdata = response.json();
            this.getlocalNotes.saveNotesInfo(this.notesdata);
            this.router.navigate(['viewnotes']);
        },
        error => {

        }
      );
      // this.router.navigate(['viewnotes']);
    } else {
      alert('invalid notes id');
    }
  }
}
