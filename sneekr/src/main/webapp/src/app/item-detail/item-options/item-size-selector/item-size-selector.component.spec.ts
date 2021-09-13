import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSizeSelectorComponent } from './item-size-selector.component';

describe('ItemSizeSelectorComponent', () => {
  let component: ItemSizeSelectorComponent;
  let fixture: ComponentFixture<ItemSizeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSizeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSizeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
