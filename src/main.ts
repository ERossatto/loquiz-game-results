// Angular
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Modules
import { LoquizModule } from './loquiz/loquiz.module';

// Utils
import { environment } from './environments/environment';

if (environment.production) enableProdMode();

platformBrowserDynamic()
.bootstrapModule(LoquizModule)
.catch(err => console.error(err));
