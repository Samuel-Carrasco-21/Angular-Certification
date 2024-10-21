import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMyUser } from '../../../models/my-user';
import { myUsers } from '../../../data/my-persons';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnDestroy {
  private subscription: Subscription = new Subscription();
  public user: IMyUser | null = null;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription.add(this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      this.user = myUsers.find((user) => user.id === parseInt(id)) || null;
    }))
    console.log('Snapshot: ', this.activatedRoute.snapshot.params);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
