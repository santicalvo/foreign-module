import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ForeignModulePage } from './foreign-module.page';
describe('ForeignModulePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ForeignModulePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ForeignModulePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=foreign-module.page.spec.js.map