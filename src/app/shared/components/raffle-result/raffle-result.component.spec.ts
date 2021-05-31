import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleResultComponent } from './raffle-result.component';

describe('RaffleResultComponent', () => {
  let component: RaffleResultComponent;
  let fixture: ComponentFixture<RaffleResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaffleResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaffleResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
