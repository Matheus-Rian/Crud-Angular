import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
// Essa classe pode ser injetada em outras classes por conta do @Injectable

@Injectable({
  providedIn: 'root',
})

export class ProductService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
