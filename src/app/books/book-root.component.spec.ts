import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRootComponent } from './book-root.component';

describe('BookRootComponent', () => {
  let component: BookRootComponent;
  let fixture: ComponentFixture<BookRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
