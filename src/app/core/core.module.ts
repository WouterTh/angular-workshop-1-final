import { NgModule, Optional, SkipSelf } from '@angular/core';
import { LoggingModule } from './logging/logging.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    LoggingModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: LoggingModule) {
    if (parent) { throw new Error('Core module may be loaded only once'); }
  }
}
