import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AppConfig } from '../app-config';
import { GlobalDataService } from './services/global.service';

@NgModule({
  declarations: [],
  imports: [SharedModule, FormsModule],
  providers: [AppConfig, GlobalDataService],

  exports: [SharedModule, FormsModule]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [GlobalDataService]
    };
  }
}
