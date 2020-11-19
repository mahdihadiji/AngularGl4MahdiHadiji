import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { EmbaucheeService} from '../../../services/embauchee.service';


@Component({
  selector: 'app-embauchee',
  templateUrl: './embauchee.component.html',
  styleUrls: ['./embauchee.component.css']
})
export class EmbaucheeComponent implements OnInit {

  personnesEmbauchees: Personne[] = [];

  constructor(private embaucheeService: EmbaucheeService) {}

  ngOnInit(): void {
    this.personnesEmbauchees = this.embaucheeService.getList();
  }

}
