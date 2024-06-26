import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMoviesComponent } from './filter-movies.component';

describe('FilterMoviesComponent', () => {
  let component: FilterMoviesComponent;
  let fixture: ComponentFixture<FilterMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
