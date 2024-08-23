import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceComponent } from './workplace.component';

describe('WorkplaceComponent', () => {
  let component: WorkplaceComponent;
  let fixture: ComponentFixture<WorkplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkplaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
