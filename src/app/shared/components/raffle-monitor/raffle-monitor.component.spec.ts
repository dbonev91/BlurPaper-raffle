import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleMonitorComponent } from './raffle-monitor.component';

describe('RaffleMonitorComponent', () => {
  let component: RaffleMonitorComponent;
  let fixture: ComponentFixture<RaffleMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaffleMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaffleMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
