import { async, TestBed } from '@angular/core/testing';
import { NgnuggetsHomeModule } from './ngnuggets-home.module';

describe('NgnuggetsHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgnuggetsHomeModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(NgnuggetsHomeModule).toBeDefined();
  });
});
