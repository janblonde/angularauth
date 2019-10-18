import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EigenaarService } from '../eigenaar.service';
import { Eigenaar } from '../eigenaar';


@Component({
  selector: 'app-eigenaar-create',
  templateUrl: './eigenaar-create.component.html',
  styleUrls: ['./eigenaar-create.component.css']
})
export class EigenaarCreateComponent implements OnInit {

  eigenaar: Eigenaar = {id: 0, naam: "",voornaam:"", email:"", bankrnr:"", unitFK:0};

  constructor(public eigenaarService: EigenaarService,
              public _router: Router,
              public route: ActivatedRoute) { }

  ngOnInit() {
  }

  createEigenaar(){
    const id = +this.route.snapshot.paramMap.get('id');

    this.eigenaar.unitFK = id;

    this.eigenaarService.createEigenaar(this.eigenaar)
      .subscribe(
        res => this._router.navigate(['/unitlist']),
        err => console.log(err)
      )
  }

}
