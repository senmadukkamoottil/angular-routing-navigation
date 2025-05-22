import { AfterViewInit, Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    MatButtonModule,
  ],
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {
  @Input() protected categoryID: string = '';
  @Input() protected pieID: string = '';

//  selectedPie$!: Observable<any>;
  selectedPie$ = this.pieService.selectedPie$;

  constructor(private readonly pieService: PieService, private route: ActivatedRoute){

    this.route.params.subscribe(params => {
      this.pieService.setSelectedCategory(params['categoryID']);
      this.pieService.setSelectedPie(params['pieID']);
    });
  }
}
