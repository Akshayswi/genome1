import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CustomTableComponent } from "../custom-table/custom-table.component";
import { VariantsComponent } from "../variants/variants.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { SelectDropDownModule } from "ngx-select-dropdown";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerModule } from "ngx-spinner";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [HomeComponent, CustomTableComponent, VariantsComponent],
  imports: [
    HomeRoutingModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    SelectDropDownModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    MatAutocompleteModule,
  ],
  exports: [],
})
export class HomeModule {}
