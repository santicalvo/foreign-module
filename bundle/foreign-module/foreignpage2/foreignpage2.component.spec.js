import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Foreignpage2Component } from './foreignpage2.component';
describe('Foreignpage2Component', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Foreignpage2Component],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(Foreignpage2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=foreignpage2.component.spec.js.map