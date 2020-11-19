import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../../model/personne';
import {EmbaucheeService} from '../../../services/embauchee.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() sendPersonne = new EventEmitter();
  constructor(private embaucheeService: EmbaucheeService) {}

  ngOnInit(): void {}
  selectItem() {
    this.sendPersonne.emit(this.personne);
  }
  embaucher(event: any) {
    event.target.disabled = true;
    this.embaucheeService.embaucherPersonne(this.personne);
  }


}
