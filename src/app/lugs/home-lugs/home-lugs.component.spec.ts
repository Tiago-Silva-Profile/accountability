import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLugsComponent } from './home-lugs.component';

describe('HomeComponent', () => {
  let component: HomeLugsComponent;
  let fixture: ComponentFixture<HomeLugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLugsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
