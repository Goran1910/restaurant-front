import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveTableDialogComponent } from './reserve-table-dialog.component';

describe('ReserveTableDialogComponent', () => {
  let component: ReserveTableDialogComponent;
  let fixture: ComponentFixture<ReserveTableDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveTableDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveTableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
