import { Injectable } from '@angular/core';
import { IAppConfig } from './core/interfaces/IAppConfig';

@Injectable()
export class AppConfig {
  settings: IAppConfig;
  load(): IAppConfig {
    const jsonFile = `/assets/config/config.json`;
    const xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.open('GET', jsonFile, false);
    xhr.send(null);
    if (xhr.status === 200) {
      this.settings = JSON.parse(xhr.responseText);
      return this.settings;
    }
    throw new Error('Failed load config file');
  }
}
