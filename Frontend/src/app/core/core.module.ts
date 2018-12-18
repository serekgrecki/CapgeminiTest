import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AppConfig } from '../app-config';

@NgModule({
  declarations: [],
  imports: [SharedModule, FormsModule],
  providers: [AppConfig],

  exports: [SharedModule, FormsModule]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
