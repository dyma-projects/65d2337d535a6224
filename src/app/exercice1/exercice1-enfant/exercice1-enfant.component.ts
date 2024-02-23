import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  constructor() {}
  public val_cpteur: number = 0;
  @Output() updateCpteur = new EventEmitter();
  @Input() updated_val?: number;
  ngOnInit() {
    this.val_cpteur = 0;
  }

  incrementer(): void {
    this.val_cpteur++;
    this.updateCpteur.emit({ value: this.val_cpteur });
  }

  decrementer(): void {
    this.val_cpteur--;
    this.updateCpteur.emit({ value: this.val_cpteur });
  }
}
