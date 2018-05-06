import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  const createApp = () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    return {
      componentInstance: fixture.debugElement.componentInstance,
      nativeElement: fixture.debugElement.nativeElement
    }
  }

  const getInputs = () => {
    return {
      title: (<HTMLInputElement>document.querySelector('input[name="title"]')),
      link: (<HTMLInputElement>document.querySelector('input[name="link"]'))
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  
  it('should create the app', async(() => {
    expect( createApp().componentInstance ).toBeTruthy();
  }));
  
  it('should return false on null inputs', async(()=>{
    expect( createApp().componentInstance.hasValidInputs(null, null) ).toEqual(false);
  }));

  it('should return false on undefined inputs', async(()=>{
    expect( createApp().componentInstance.hasValidInputs(undefined, undefined) ).toEqual(false);
  }));

  it('should return false on both empty inputs', async(()=>{
    const {title, link} = getInputs();
    title.value = '';
    link.value = ''
    expect( createApp().componentInstance.hasValidInputs(title, link) ).toEqual(false);
  }));

  it('should return false on single empty inputs - title', async(()=>{
    const {title, link} = getInputs();
    title.value = 'A title';
    link.value = '';
    expect( createApp().componentInstance.hasValidInputs(title, link) ).toEqual(false);
  }));

  it('should return false on single empty inputs - link', async(()=>{
    const {title, link} = getInputs();
    title.value = '';
    link.value = 'A link';
    expect( createApp().componentInstance.hasValidInputs(title, link) ).toEqual(false);
  }));

  it('should return true on valid inputs', async(()=>{
    const {title, link} = getInputs();
    title.value = 'A title';
    link.value = 'A link';
    expect( createApp().componentInstance.hasValidInputs(title, link) ).toEqual(true);
  }));

  it('should create article with title "First Article" and link "/first_article.html"', async(()=>{
    const {title, link} = getInputs();
    title.value = 'First Article';
    link.value = '/first_article.html';
    
    const {componentInstance, nativeElement} =  createApp();
    
    componentInstance.addArticle(title, link);

    const article = {
      title: nativeElement.querySelector('a.header').value,
      link: nativeElement.querySelector('a.header').href
    }
    
    const matching_values = (article.title == 'First Article') && 
    (article.link == '/first_article.html');

    expect(matching_values).toEqual(true);
  }));


});
