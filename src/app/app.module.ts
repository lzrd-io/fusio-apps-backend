import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgChartsModule} from 'ng2-charts';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MonacoEditorModule} from '@dmlukichev/ngx-monaco-editor';
import {ChangePasswordComponent} from './account/change-password/change-password.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {NavigationComponent} from './navigation/navigation.component';
import {ListComponent as DashboardList} from "./api/dashboard/list/list.component";
import {ListComponent as RouteList} from "./api/route/list/list.component";
import {DetailComponent as RouteDetail} from "./api/route/detail/detail.component";
import {ModalComponent as RouteModal} from "./api/route/modal/modal.component";
import {LogComponent as RouteLog} from './api/route/log/log.component';
import {ListComponent as ActionList} from "./api/action/list/list.component";
import {DetailComponent as ActionDetail} from "./api/action/detail/detail.component";
import {ModalComponent as ActionModal} from "./api/action/modal/modal.component";
import {DesignerComponent as ActionDesigner} from './api/action/designer/designer.component';
import {ListComponent as SchemaList} from "./api/schema/list/list.component";
import {DetailComponent as SchemaDetail} from "./api/schema/detail/detail.component";
import {ModalComponent as SchemaModal} from "./api/schema/modal/modal.component";
import {DesignerComponent as SchemaDesigner} from './api/schema/designer/designer.component';
import {ImportComponent as SchemaImport} from './api/schema/import/import.component';
import {ListComponent as ConnectionList} from "./api/connection/list/list.component";
import {DetailComponent as ConnectionDetail} from "./api/connection/detail/detail.component";
import {ModalComponent as ConnectionModal} from "./api/connection/modal/modal.component";
import {IntrospectionComponent} from './api/connection/introspection/introspection.component';
import {ListComponent as EventList} from "./api/event/list/list.component";
import {DetailComponent as EventDetail} from "./api/event/detail/detail.component";
import {ModalComponent as EventModal} from "./api/event/modal/modal.component";
import {ListComponent as CronjobList} from "./api/cronjob/list/list.component";
import {DetailComponent as CronjobDetail} from "./api/cronjob/detail/detail.component";
import {ModalComponent as CronjobModal} from "./api/cronjob/modal/modal.component";
import {ListComponent as AppList} from "./consumer/app/list/list.component";
import {DetailComponent as AppDetail} from "./consumer/app/detail/detail.component";
import {ModalComponent as AppModal} from "./consumer/app/modal/modal.component";
import {ListComponent as ScopeList} from "./consumer/scope/list/list.component";
import {DetailComponent as ScopeDetail} from "./consumer/scope/detail/detail.component";
import {ModalComponent as ScopeModal} from "./consumer/scope/modal/modal.component";
import {ListComponent as UserList} from "./consumer/user/list/list.component";
import {DetailComponent as UserDetail} from "./consumer/user/detail/detail.component";
import {ModalComponent as UserModal} from "./consumer/user/modal/modal.component";
import {ListComponent as RateList} from "./consumer/rate/list/list.component";
import {DetailComponent as RateDetail} from "./consumer/rate/detail/detail.component";
import {ModalComponent as RateModal} from "./consumer/rate/modal/modal.component";
import {ListComponent as PageList} from "./consumer/page/list/list.component";
import {DetailComponent as PageDetail} from "./consumer/page/detail/detail.component";
import {ModalComponent as PageModal} from "./consumer/page/modal/modal.component";
import {ListComponent as SdkList} from "./consumer/sdk/list/list.component";
import {ListComponent as SubscriptionList} from "./consumer/subscription/list/list.component";
import {DetailComponent as SubscriptionDetail} from "./consumer/subscription/detail/detail.component";
import {ModalComponent as SubscriptionModal} from "./consumer/subscription/modal/modal.component";
import {ListComponent as LogList} from "./analytics/log/list/list.component";
import {DetailComponent as LogDetail} from "./analytics/log/detail/detail.component";
import {FilterComponent as LogFilter} from './analytics/log/filter/filter.component';
import {ListComponent as StatisticList} from "./analytics/statistic/list/list.component";
import {ListComponent as ErrorList} from "./analytics/error/list/list.component";
import {DetailComponent as ErrorDetail} from "./analytics/error/detail/detail.component";
import {ListComponent as TokenList} from "./analytics/token/list/list.component";
import {DetailComponent as TokenDetail} from "./analytics/token/detail/detail.component";
import {FilterComponent as TokenFilter} from "./analytics/token/filter/filter.component";
import {ListComponent as PlanList} from "./monetization/plan/list/list.component";
import {DetailComponent as PlanDetail} from "./monetization/plan/detail/detail.component";
import {ModalComponent as PlanModal} from "./monetization/plan/modal/modal.component";
import {ListComponent as TransactionList} from "./monetization/transaction/list/list.component";
import {DetailComponent as TransactionDetail} from "./monetization/transaction/detail/detail.component";
import {ListComponent as CategoryList} from "./system/category/list/list.component";
import {DetailComponent as CategoryDetail} from "./system/category/detail/detail.component";
import {ModalComponent as CategoryModal} from "./system/category/modal/modal.component";
import {ListComponent as RoleList} from "./system/role/list/list.component";
import {DetailComponent as RoleDetail} from "./system/role/detail/detail.component";
import {ModalComponent as RoleModal} from "./system/role/modal/modal.component";
import {ListComponent as MarketplaceList} from "./system/marketplace/list/list.component";
import {ListComponent as ConfigList} from "./system/config/list/list.component";
import {DetailComponent as ConfigDetail} from "./system/config/detail/detail.component";
import {ModalComponent as ConfigModal} from "./system/config/modal/modal.component";
import {ListComponent as AuditList} from "./system/audit/list/list.component";
import {DetailComponent as AuditDetail} from "./system/audit/detail/detail.component";
import {FilterComponent as AuditFilter} from './system/audit/filter/filter.component';
import {ListComponent as TrashList} from "./system/trash/list/list.component";
import {ConfigFormComponent} from './shared/config-form/config-form.component';
import {ScopeCategoriesComponent} from './shared/scope-categories/scope-categories.component';
import {TagEditorComponent} from './shared/tag-editor/tag-editor.component';
import {CsvPipe} from "./shared/tag-editor/csv.pipe";
import {TypeschemaEditorModule} from "ngx-typeschema-editor";
import {MapComponent} from './shared/map/map.component';
import {CollectionComponent} from './shared/collection/collection.component';
import {GeneratorComponent} from './api/generator/generator.component';
import {FusioService} from "./fusio.service";
import {FusioSdkModule, FusioService as Sdk} from "ngx-fusio-sdk";
import {ConfigBuilder} from "./config-builder";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ChangePasswordComponent,
    LoginComponent,
    LogoutComponent,
    DashboardList,
    RouteList,
    RouteDetail,
    RouteModal,
    RouteLog,
    ActionList,
    ActionDetail,
    ActionModal,
    ActionDesigner,
    SchemaList,
    SchemaDetail,
    SchemaModal,
    SchemaDesigner,
    SchemaImport,
    ConnectionList,
    ConnectionDetail,
    ConnectionModal,
    IntrospectionComponent,
    EventList,
    EventDetail,
    EventModal,
    CronjobList,
    CronjobDetail,
    CronjobModal,
    GeneratorComponent,
    AppList,
    AppDetail,
    AppModal,
    ScopeList,
    ScopeDetail,
    ScopeModal,
    UserList,
    UserDetail,
    UserModal,
    RateList,
    RateDetail,
    RateModal,
    PageList,
    PageDetail,
    PageModal,
    SdkList,
    SubscriptionList,
    SubscriptionDetail,
    SubscriptionModal,
    StatisticList,
    LogList,
    LogDetail,
    LogFilter,
    ErrorList,
    ErrorDetail,
    TokenList,
    TokenDetail,
    TokenFilter,
    PlanList,
    PlanDetail,
    PlanModal,
    TransactionList,
    TransactionDetail,
    CategoryList,
    CategoryDetail,
    CategoryModal,
    RoleList,
    RoleDetail,
    RoleModal,
    MarketplaceList,
    ConfigList,
    ConfigDetail,
    ConfigModal,
    AuditList,
    AuditDetail,
    AuditFilter,
    TrashList,
    CsvPipe,
    ConfigFormComponent,
    ScopeCategoriesComponent,
    TagEditorComponent,
    MapComponent,
    CollectionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule.forRoot(),
    MonacoEditorModule.forRoot(),
    TypeschemaEditorModule,
    FusioSdkModule.forRoot(ConfigBuilder.build())
  ],
  providers: [
    {provide: Sdk, useExisting: FusioService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

declare global {
  var FUSIO_URL: string | undefined;
}
