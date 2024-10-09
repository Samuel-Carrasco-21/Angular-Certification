import { Component, OnDestroy } from '@angular/core';
import { IPerson } from '../../../models/person';
import { Gender } from '../../../enums/gender';
import { filter, from, map, Subscription, tap } from "rxjs";

@Component({
  selector: 'app-class-08-10-2024',
  standalone: true,
  imports: [],
  templateUrl: './class-08-10-2024.component.html',
  styleUrl: './class-08-10-2024.component.scss'
})
export class Class08102024Component implements OnDestroy{
  private youtubeSubscription?:Subscription;
  private listSubscriptions:Subscription[] = [];

  youtube = from([1, 2, 3, 4, 5, 6]);

  constructor(){
    this.youtubeSubscription = this.youtube.subscribe((res) => {
      console.log("SUSCRIBER 1: ", res);
    });
  }

  public addVideo() {
    this.listSubscriptions.push(
      this.youtube
      .pipe(
        map((res: number) => res % 2 === 0 ? res : null),
        tap((res)  => {console.log('VALUE: ', res)}),
        filter((res: number | null) => res !== null),
      )
      .subscribe((res) => {
        console.log("SUSCRIBER 2: ", res);
      })
    );
  }

  ngOnDestroy(): void {
    this.youtubeSubscription?.unsubscribe();
    this.listSubscriptions.map(subscription => subscription.unsubscribe());
  }
}
