import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AgmCoreModule } from '@agm/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
// import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { NgxEasypiechartModule } from 'ngx-easypiechart';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { MonitoringRoutes } from './monitoring.routing';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WidgetComponentModule } from '../widget-component/widget-component.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NxtGenSupportDashboardComponent } from './nxt-gen-support-dashboard/nxt-gen-support-dashboard.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { ReportsComponent } from './reports/reports.component';
import { UnknownsComponent } from './unknowns/unknowns.component';

@NgModule({
	declarations: [
		DashboardComponent,
		NxtGenSupportDashboardComponent,
		MonitoringComponent,
		ReportsComponent,
		UnknownsComponent
	],
	imports: [
		CommonModule,
		MatTableModule,
		MatSelectModule,
		FlexLayoutModule,
		WidgetComponentModule,
		// EasyPieChartModule,
		NgbAccordionModule,
		NgxEasypiechartModule,
		MatPaginatorModule,
		MatChipsModule,
      TranslateModule,
      PerfectScrollbarModule,
		RouterModule.forChild(MonitoringRoutes),
		MatIconModule,
		MatButtonModule,
		MatTabsModule,
		MatCardModule,
		MatMenuModule,
		MatListModule,
		MatCheckboxModule,
		MatDividerModule,
		ChartsModule,
		NgxDatatableModule,
		MatProgressBarModule,
		MatInputModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		MatSortModule,
		AgmCoreModule.forRoot({apiKey: 'AIzaSyD4y2luRxfM8Q8yKHSLdOOdNpkiilVhD9k'})
	]
})
export class MonitoringModule { }
