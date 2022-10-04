import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  busqueda: string = '';

  constructor(private activedRouter: ActivatedRoute,
              private PaisService: PaisService) { }

  ngOnInit(): void {

    this.activedRouter.params
    .pipe(
      switchMap( (params) => this.PaisService.getPaisPorAlpha(params["codigoPais"]))
    ).subscribe({
      
      next: (resp:Country) => {console.log(resp)

      this.pais= resp},
      error: (err:any) => console.log(err)
    }
    )
    this.activedRouter.params.subscribe(params => { this.busqueda = params["codigoPais"]})
      //   console.log(params["codigoPais"])
        
      // this.PaisService.getPaisPorAlpha(params)
      // .subscribe((data:Country) => 
      // { 
      // this.paisGetAlpha = data;
      // console.log(data)})
      // console.log(this.paisGetAlpha)})
      
      
      
}

}