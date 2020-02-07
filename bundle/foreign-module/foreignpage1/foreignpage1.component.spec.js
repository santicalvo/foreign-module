import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Foreignpage1Component } from './foreignpage1.component';
describe('Foreignpage1Component', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Foreignpage1Component],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(Foreignpage1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=foreignpage1.component.spec.js.map