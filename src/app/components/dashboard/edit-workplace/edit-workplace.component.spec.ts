import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkplaceComponent } from './edit-workplace.component';

describe('EditWorkplaceComponent', () => {
  let component: EditWorkplaceComponent;
  let fixture: ComponentFixture<EditWorkplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditWorkplaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWorkplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
