import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Organization } from '@ministry/interfaces';
import { OrganizationService } from '@ministry/services';

import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent, IRowNode, SelectionChangedEvent, IsRowSelectable, RowNode, CheckboxSelectionCallbackParams } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-enterprise';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-organizations',
  standalone: true,
  imports: [ CommonModule, AgGridModule ],
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.css'
})
export class OrganizationsComponent {

  public themeClass: string = "ag-theme-quartz"; 

  private gridApi!: GridApi<Organization>;

  public columnDefs: ColDef[] = [
    {
      headerName: '',
      field: 'actioncell',
      filter: false,
      width: 20,
      resizable: false,
      headerCheckboxSelection: false,
      checkboxSelection: true,
      // cellRenderer: (params: any) => {
      //   this.oService.getOUCode()
      //   .subscribe(data=>{
      //     params.node.setSelected(data.includes(params.node.data.code))
      //   });
      // }
    },
    { 
    headerName:'Κωδικός', 
    field:'code' },
    { 
      headerName:'Φορέας', 
      field:'preferredLabel' },
    { 
      headerName:'Εποπτεύοντας φορέας', 
      field:'subOrganizationOf.preferredLabel' },
    { 
      headerName:'Τύπος φορέα', 
      field:'organizationType.description' },
    { 
      headerName:'Λειτουργία', 
      field:'purpose',  
        valueGetter: params => {
          if (params.data.purpose) {
            const data = params.data.purpose; 
            const purpose: string[] = [];
            data.forEach(function(x: { description: string; }){
              purpose.push(x.description);
            });
             return purpose.join(',');
          } else {
            return undefined;
          } 
        } 
    },
    { 
      headerName:'Περιγραφή', 
      field:'description' },
    { 
      headerName:'ΦΕΚ', 
      field:'foundationFek.issue' },
    { 
      headerName:'Μονάδες', 
      field:'organization_units' }
  ];
  
  public defaultColDef: ColDef = {
    sortable:true, 
    filter:'agTextColumnFilter', 
    suppressSizeToFit:true, 
    resizable:true,
    floatingFilter: true,
  };

  public rowData$!: Observable<Organization[]>;
  public groupDefaultExpanded = 1;
  public autoGroupColumnDef: ColDef = {
    minWidth: 200,
  };

  public overlayLoadingTemplate =
    '<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>';
  
  public overlayNoRowsTemplate =
    '<span style="padding: 10px;">Loading data...</span>';

  constructor(
    private organizationService: OrganizationService
  ){}

  onGridReady(params: GridReadyEvent<Organization>) {
    this.gridApi = params.api;
    
    this.rowData$ = this.organizationService.organizations$;

    if (!this.rowData$) {
      this.gridApi.hideOverlay();
    } 
  }
  
  onSelectionChanged(event: SelectionChangedEvent) {
    const selectedData = this.gridApi.getSelectedRows();
    console.log(selectedData);
    // this.oService.setOUCodes(selectedData.map(x => x.code));
  }

  // isRowSelectable: IsRowSelectable = (rowNode: RowNode) => {
  //   return rowNode.data ? rowNode.data.organization_units >=1 : true;
  // };

}
