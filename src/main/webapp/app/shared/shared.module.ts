import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { RajeshpythonappSharedLibsModule, RajeshpythonappSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [RajeshpythonappSharedLibsModule, RajeshpythonappSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [RajeshpythonappSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RajeshpythonappSharedModule {
    static forRoot() {
        return {
            ngModule: RajeshpythonappSharedModule
        };
    }
}
