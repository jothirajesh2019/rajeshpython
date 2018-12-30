import { NgModule } from '@angular/core';

import { RajeshpythonappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RajeshpythonappSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RajeshpythonappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RajeshpythonappSharedCommonModule {}
