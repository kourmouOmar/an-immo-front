import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subject } from "rxjs";
import { BienService } from "../annonce.service";
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";

@Component({
  selector: "app-add-annonce",
  templateUrl: "./add-annonce.component.html",
  styleUrls: ["./add-annonce.component.css"],
})
export class AddAnnonceComponent implements OnInit {
  bienFormGroup: FormGroup = new FormGroup({});
  photo: File = null;
  previewUrl: any = null;
  constructor(
    private formBuilder: FormBuilder,
    private bienService: BienService,
    private _snackBar: MatSnackBar,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.bienFormGroup = this.formBuilder.group({
      /* bien */
      titre: [""],
      description: [""],
      image: [""],
    });
  }

  addAnnonce() {
    let contentByte: number[] = [];
    const reader = new FileReader();
    let photoBiin = new Subject<number[]>();
    let bytes;
    reader.readAsArrayBuffer(this.photo);
    reader.onloadend = function (e = this.photo) {
      const arrayBuffer = (<any>e.target).result;
      bytes = new Int8Array(arrayBuffer);
      contentByte = new Array(bytes.length);
      for (let i = 0; i < bytes.length; i++) {
        contentByte[i] = bytes[i];
      }
      photoBiin.next(contentByte);
    };
    photoBiin.asObservable().subscribe((resp) => {
      let bien = {
        titre: this.bienFormGroup.get('titre').value,
        description:this.bienFormGroup.get('description').value,
        image:resp
      }
      this.bienService.addBien(bien).subscribe(res=>{
        this.openSnackBarSuccess("l'ajouter avec success","fermer")
        this.router.navigateByUrl('/annonce');
      },error=>{
        this.openSnackBarFailure("erreur de saisie ","fermer")
      })

    });
  }
  /**
   * 
   * @param file 
   */
  handleFileInput(file: FileList) {
    if (file.item(0)) {
      let reader = new FileReader();
      reader.readAsDataURL(file.item(0));
      reader.onload = (_event) => {
        this.previewUrl = reader.result;
      };
      this.photo = file.item(0);
    } else {
    }
  }

  /**
  * open Snack Bar Success
  * 
  * @param message
  * @param action
  */
   openSnackBarSuccess(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 10000,
      panelClass: 'oppenSnackBarSuccessClass'
    });
  }

  /**
   * open Snack Bar Failure
   * 
   * @param message 
   * @param action 
   */
  openSnackBarFailure(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 10000,
      panelClass: 'oppenSnackBarFailureClass'
    });
  }
}
