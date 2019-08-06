import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupManagerComponent } from './user-group-manager.component';

describe('UserGroupManagerComponent', () => {
  let component: UserGroupManagerComponent;
  let fixture: ComponentFixture<UserGroupManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
