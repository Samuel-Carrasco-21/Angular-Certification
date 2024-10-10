import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardComponent,
    ItemComponent,
    ListComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CardComponent,
    ItemComponent,
    ListComponent,
    SearchComponent,
  ],
})
export class ComponentsModule { }
