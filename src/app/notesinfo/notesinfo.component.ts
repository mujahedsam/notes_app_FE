import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { GetnotesdataService } from '../getnotesdata.service';
import { GetlocalnotesdataService } from '../getlocalnotes.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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
    private getlocalNotes: GetlocalnotesdataService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  open(): void {
    if (this.uid != null) {
      console.log(this);
      this.getnotes.fetchnotes(this.uid).subscribe(
        response => {
            console.log(response);
            this.notesdata = response;
            this.getlocalNotes.saveNotesInfo(this.notesdata);
            this.router.navigate(['viewnotes']);
        },
        error => {
          console.log('error in fetching data using uid!');
        }
      );
      // this.router.navigate(['viewnotes']);
    } else {
      alert('invalid notes id');
    }
  }


  add_notes() {
    const dialogRef = this.dialog.open(AddnotesDialogComponent, {
      width: '250px',
      data: {message : 'Enter the id and Notes Name'}
    });

    dialogRef.afterClosed().subscribe(
        (result) => {
        console.log('The dialog was closed');
        console.log(result);
      if (result !== undefined) {
        if (result.uid === undefined || result.name === undefined) {
          console.log('cant create notes!');
        } else {
              this.getnotes.savenotes(' ', result).subscribe(
                (response) => {
                  console.log(response);
                  this.getlocalNotes.saveNotesInfo([result]);
                  this.router.navigate(['viewnotes']);
                },
                  error => {
                    console.log('Error in creating notes');
                  }
            );
        }
      } else {
        console.log('dialog box closed!');
      }
      });
  }
}

// dialog class and component

@Component({
  selector: 'app-add-notes-dialog',
  templateUrl: 'addnotesdialog.html',
})
export class AddnotesDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddnotesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
 }
