import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePanel } from './resource-panel';

describe('ResourcePanel', () => {
  let component: ResourcePanel;
  let fixture: ComponentFixture<ResourcePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcePanel],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourcePanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
