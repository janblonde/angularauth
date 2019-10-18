import { Component, OnInit } from '@angular/core';
import { EigenaarService } from '../eigenaar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Eigenaar } from '../eigenaar';

@Component({
  selector: 'app-eigenaar-edit',
  templateUrl: './eigenaar-edit.component.html',
  styleUrls: ['./eigenaar-edit.component.css']
})
export class EigenaarEditComponent implements OnInit {

  eigenaar: Eigenaar;

  constructor(public eigenaarService: EigenaarService,
              public _router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eigenaarService.getEigenaar(id)
      .subscribe(
        res => this.eigenaar = res,
        err => console.log(err)
      )
  }

  saveEigenaar(eigenaar: Eigenaar){
    //const id = +this.route.snapshot.paramMap.get('id');
    //this.eigenaar. = id;
    console.log(eigenaar);

    this.eigenaarService.saveEigenaar(eigenaar)
      .subscribe(
        res => {
          console.log(res);
          this._router.navigate(['/unitlist']);
        },
        err => console.log(err)
      );
    this.eigenaar = {id: 0, naam: "", voornaam: "", email:"", bankrnr: "", unitFK: 0};
  }

}
