import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonyDetail } from './colony-detail';

describe('ColonyDetail', () => {
  let component: ColonyDetail;
  let fixture: ComponentFixture<ColonyDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColonyDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(ColonyDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
