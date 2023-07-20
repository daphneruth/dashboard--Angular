// import { Component } from '@angular/core';
// import {Inject, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// import { PurchasesService } from 'src/app/Services/purchases.service';

// @Component({
//   selector: 'app-purchase',
//   templateUrl: './purchase.component.html',
//   styleUrls: ['./purchase.component.scss']
// })




// export class PurchaseComponent implements OnInit {
//   purchaseform: FormGroup;

//   education: string[] = [
//     'Matric',
//     'Diploma',
//     'Intermediate',
//     'Graduate',
//     'Post Graduate',
//   ];

//   constructor(
//     private _fb: FormBuilder,
//     private _purchaseService: PurchasesService,
//     private _dialogRef: MatDialogRef<PurchaseComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any,
    
//   ) {
//     this.purchaseform = this._fb.group({
//       firstName: '',
//       lastName: '',
//       email: '',
//       dob: '',
//       gender: '',
//       education: '',
//       company: '',
//       experience: '',
//       package: '',
//     });
//   }
//   // ngOnInit(): void {
//   //   throw new Error('Method not implemented.');
//   // }

//   ngOnInit(): void {
//     this.purchaseform.patchValue(this.data);

//   }
  

//   onFormSubmit() {
//     if (this.purchaseform.valid) {
//       if (this.data) {
//         this._purchaseService
//           .updateEmployee(this.data.id, this.purchaseform.value)
//           .subscribe({
//             next: (val: any) => {
//           //     this._coreService.openSnackBar('Employee detail updated!');
//               this._dialogRef.close(true);
//             },
//             error: (err: any) => {
//               console.error(err);
//             },
//           });
//       } else {
//         this._purchaseService.addEmployee(this.purchaseform.value).subscribe({
//           next: (val: any) => {
//           //   this._coreService.openSnackBar('Employee added successfully');
//             this._dialogRef.close(true);
//             console.log("added ")
//            },
//           error: (err: any) => {
//             console.error(err);
//           },
//         });
//       }
//     }
//   // }
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PurchasesService } from 'src/app/Services/purchases.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent {
  purchaseform: FormGroup;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  constructor(
    private _fb: FormBuilder,
    private _purchaseService: PurchasesService,
    private _dialogRef: MatDialogRef<PurchaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.purchaseform = this._fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      dob: [''],
      gender: [''],
      education: [''],
      company: [''],
      experience: [''],
      package: [''],
    });

    if (data) {
      this.purchaseform.patchValue(data);
    }
  }

  onFormSubmit() {
    if (this.purchaseform.valid) {
      if (this.data) {
        this._purchaseService.updateEmployee(this.data.id, this.purchaseform.value).subscribe({
          next: (val: any) => {
            // this._coreService.openSnackBar('Employee detail updated!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      } else {
        this._purchaseService.addEmployee(this.purchaseform.value).subscribe({
          next: (val: any) => {
            // this._coreService.openSnackBar('Employee added successfully');
            this._dialogRef.close(true);
            console.log("added ")
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
