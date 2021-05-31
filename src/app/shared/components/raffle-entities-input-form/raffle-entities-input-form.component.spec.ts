import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleEntitiesInputFormComponent } from './raffle-entities-input-form.component';

describe('RaffleEntitiesInputFormComponent', () => {
  let component: RaffleEntitiesInputFormComponent;
  let fixture: ComponentFixture<RaffleEntitiesInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaffleEntitiesInputFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaffleEntitiesInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
