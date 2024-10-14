import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrl: './personal-card.component.scss'
})
export class PersonalCardComponent implements OnChanges, AfterViewInit {
  @Input() user: User | null = null;
  @ViewChild('contentContainerPersonalCard', { read: ElementRef }) contentContainer!: ElementRef;
  public finalScore: number = 0;
  public finalAddress: string = '';
  public hasProjectedContent: boolean = false;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(_changes: SimpleChanges): void {
    if (this.user) {
      this.finalScore = (this.user.firstTestScore + this.user.secondTestScore + this.user.finalTestScore) / 3;
      this.finalScore = Math.round(this.finalScore) || 0;
    };
  }

  ngAfterViewInit(): void {
    this.hasProjectedContent = this.contentContainer.nativeElement.hasChildNodes();
    this.cdr.detectChanges();
  }
}
