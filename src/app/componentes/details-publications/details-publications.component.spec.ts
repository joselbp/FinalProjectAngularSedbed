import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPublicationsComponent } from './details-publications.component';

describe('DetallesPublicacionComponent', () => {
  let component: DetailsPublicationsComponent;
  let fixture: ComponentFixture<DetailsPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsPublicationsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
