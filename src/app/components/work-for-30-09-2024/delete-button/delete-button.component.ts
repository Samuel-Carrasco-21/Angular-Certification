import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPerson } from '../../../models/person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss'
})
export class DeleteButtonComponent {
  @Input() text: string = '';
  @Input() bgColor: string = '#007bff';
  @Input() personsList: IPerson[] = [];
  @Output() sendData: EventEmitter<IPerson[]> = new EventEmitter();

  public onClick() {
    const newPersonsList: IPerson[] = this.personsList.filter(person => !person.hasDiscount);
    this.sendData.emit(newPersonsList);
  }
}
