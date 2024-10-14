import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeographicCardComponent } from './geographic-card/geographic-card.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { ComponentsModule } from '../components/components.module';
import { MessagesCardComponent } from './messages-card/messages-card.component';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { TabComponent } from './tab/tab.component';
import { EmptyCardComponent } from './empty-card/empty-card.component';



@NgModule({
  declarations: [
    GeographicCardComponent,
    InfoCardsComponent,
    MessagesCardComponent,
    PersonalCardComponent,
    EmptyCardComponent,
    TabComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    GeographicCardComponent,
    InfoCardsComponent,
    MessagesCardComponent,
    PersonalCardComponent,
    EmptyCardComponent,
    TabComponent,
  ],
})
export class InfoCardsModule { }
