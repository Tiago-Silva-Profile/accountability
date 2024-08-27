import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugsComponent } from './lugs.component';

describe('LugsComponent', () => {
  let component: LugsComponent;
  let fixture: ComponentFixture<LugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LugsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
