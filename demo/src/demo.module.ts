import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';

const CommonCacheModule = require('common-cache').CommonCacheModule;

@NgModule({
    imports: [CommonCacheModule, BrowserModule],
    declarations: [DemoComponent],
    bootstrap: [DemoComponent]
})
export class DemoModule {}
