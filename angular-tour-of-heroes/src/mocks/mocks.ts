import any = jasmine.any;
import { Observable, of } from 'rxjs';
import { Component, EventEmitter, NgModule } from '@angular/core';

export class HeroServiceMock {
  public static instance(): any {
    let instance = jasmine.createSpyObj('HeroService', ['addHero', 'getHeroes', 'getHero', 'updateHero', 'deleteHero', 'searchHeroes']);
    instance.addHero.and.returnValue(of({}));
    instance.getHeroes.and.returnValue(of([]));
    instance.getHero.and.returnValue(of({}));
    instance.searchHeroes.and.returnValue(of([]));
    return instance;
  }
}