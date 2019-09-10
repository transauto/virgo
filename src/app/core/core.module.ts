import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClientsFeedbackComponent } from './clients-feedback/clients-feedback.component';
import { CoreComponent } from './core.component';
import { FaqComponent } from './faq/faq.component';
import { OurPerformanceComponent } from './our-performance/our-performance.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { PreviewImageComponent } from './preview-image/preview-image.component';
import { WorkStepsComponent } from './work-steps/work-steps.component';
import { FrequentQuestionsComponent } from './frequent-questions/frequent-questions.component';

@NgModule({
  declarations: [
    CoreComponent,
    WorkStepsComponent,
    AboutUsComponent,
    FaqComponent,
    OurPerformanceComponent,
    ClientsFeedbackComponent,
    OurServicesComponent,
    PreviewImageComponent,
    FrequentQuestionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CoreComponent]
})
export class CoreModule { }
