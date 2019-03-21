import { Component, OnInit } from '@angular/core';
import PontoLocal from '../../domain/PontoLocal';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  public pontosLocais:PontoLocal[] = [];

    initPontoApi() {
        this.apiService.getPontoLocais().subscribe(data => this.pontosLocais = data, err=> {console.log(err);alert("err")});
    }

    ngOnInit() {
        this.initPontoApi();    
    }

}
