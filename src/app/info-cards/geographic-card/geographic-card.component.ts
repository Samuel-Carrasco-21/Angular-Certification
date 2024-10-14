import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-geographic-card',
  templateUrl: './geographic-card.component.html',
  styleUrl: './geographic-card.component.scss'
})
export class GeographicCardComponent implements OnChanges, AfterViewInit {
  @Input() user: User | null = null;
  @ViewChild('contentContainerGeographicCard', { read: ElementRef }) contentContainer!: ElementRef;
  public finalAddress: string = '';
  public hasProjectedContent: boolean = false;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.user) {
      const { zone, street, number } = this.user.address;
      this.finalAddress = zone + ', ' + street + ', ' + number;
    }
  }

  ngAfterViewInit(): void {
    this.hasProjectedContent = this.contentContainer.nativeElement.hasChildNodes();
    this.cdr.detectChanges();
  }
}
