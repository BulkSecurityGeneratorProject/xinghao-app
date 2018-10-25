import { NgModule } from '@angular/core';

import { XinghaoAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [XinghaoAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [XinghaoAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class XinghaoAppSharedCommonModule {}
