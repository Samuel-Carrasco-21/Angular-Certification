import { Component, OnDestroy, OnInit } from '@angular/core';
import { InfoIndicatorComponent } from '../info-indicator/info-indicator.component';
import { PersonCardComponent } from "../person-card/person-card.component";
import { IPerson } from '../../../models/person';
import { Gender } from '../../../enums/gender';
import { CommonModule } from '@angular/common';
import { persons } from '../../../data/persons';
import { Subscription } from 'rxjs';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';

@Component({
  selector: 'app-homework-30-09-2024',
  standalone: true,
  imports: [CommonModule, InfoIndicatorComponent, DeleteButtonComponent, PersonCardComponent],
  templateUrl: './homework-30-09-2024.component.html',
  styleUrl: './homework-30-09-2024.component.scss'
})
export class Homework30092024Component implements OnInit, OnDestroy{
  public genderType: typeof Gender = Gender;
  public personsList: IPerson[] = [];
  private subsPersonsList!: Subscription;

  ngOnInit(): void {
    this.personsList = persons.map(person => {
      return person.age >= 18 ? { ...person, hasDiscount: true } : { ...person, hasDiscount: false };
    });
  }

  ngOnDestroy(): void {
    this.subsPersonsList.unsubscribe();
  }

  public countByGender(gender: Gender): number {
    return this.personsList.filter(person => person.gender === gender).length;
  }

  public countDiscounts(): number {
    return this.personsList.filter(person => person.hasDiscount).length;
  }

  public getPersonsListChanged(personsList:IPerson[]){
    this.personsList = [...personsList];
  }
}
