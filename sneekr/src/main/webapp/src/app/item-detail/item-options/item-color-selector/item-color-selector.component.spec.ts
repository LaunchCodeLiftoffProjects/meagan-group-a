import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemColorSelectorComponent } from './item-color-selector.component';

describe('ItemColorSelectorComponent', () => {
  let component: ItemColorSelectorComponent;
  let fixture: ComponentFixture<ItemColorSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemColorSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemColorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
