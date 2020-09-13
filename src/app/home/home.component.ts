import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeDialogComponent } from '../home.dialog/home.dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(HomeDialogComponent, {
      // width: '250px'
      // data: { name: this.name, animal: this.animal }
    });
  }

  ngOnInit(): void {
    this.openDialog();

  }

}
