import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css'],
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  @ViewChild('myinput') public input_element!: ElementRef<HTMLInputElement>;
  constructor() {}

  ngOnInit() {}

  update_input_value() {
    this.valeur = this.input_element.nativeElement.value;
  }
}
