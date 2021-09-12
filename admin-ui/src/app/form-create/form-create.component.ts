import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: { name: string, age: number }, private matDialog: MatDialogRef<FormCreateComponent>) {
  }

  ngOnInit(): void {
  }

}
