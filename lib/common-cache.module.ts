import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonCacheService } from './common-cache.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
    imports: [CommonModule]
})
export class CommonCacheModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CommonCacheModule,
            providers: [CommonCacheService]
        };
    }
}
