import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { MockComponent } from 'ng-mocks';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from '../hero.service';
import { HeroServiceMock } from '../../mocks/mocks';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DashboardComponent,
        MockComponent(HeroSearchComponent)
      ],
      providers: [
        {
          provide: HeroService, 
          useValue: HeroServiceMock.instance()
        }
      ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
