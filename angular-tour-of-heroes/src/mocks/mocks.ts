import any = jasmine.any;
import { Observable, of } from 'rxjs';
import { Component, EventEmitter, NgModule } from '@angular/core';

export class HeroServiceMock {
  public static instance(): any {
    let instance = jasmine.createSpyObj('HeroService', ['getHeroes']);
    instance.getHeroes.and.returnValue(of([]));
    return instance;
  }
}