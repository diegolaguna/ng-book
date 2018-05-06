import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  articles: Article[];
  
  constructor() {
    this.articles = [
      new Article('Angular 5', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fulstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ]
  }

  hasValidInputs = (title, link) => {

    const areNotNull = (title, link) => (title !== null && link !== null);
    const areNotUndefined = (title, link) => (title !== undefined && link !== undefined);
    const areNotEmpty = (title, link) => (title.value.length > 0 && link.value.length > 0);

    return (areNotNull(title, link) && areNotUndefined(title, link) && areNotEmpty(title, link));
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {

    if (this.hasValidInputs(title, link)) {
      console.log(`Title: ${title.value} - Link: ${link.value}`);
      this.articles.push(new Article(title.value, link.value, 0));
      title.value = '';
      link.value = '';
    } else {
      console.log('Not valid inputs.');
    }
    
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort( (a: Article, b: Article) => b.votes - a.votes );
  }

}
