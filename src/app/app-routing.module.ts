import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormComponent } from './component/form/form.component';
import { PresentationComponent } from './component/presentation/presentation.component';

const routes: Routes = [
  { path: 'calculadora', component: CalculatorComponent },
  { path: 'formulario', component: FormComponent },
  { path: '', component: PresentationComponent },
  { path: 'calculadora-2', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
