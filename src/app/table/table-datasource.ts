import { DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { map } from "rxjs/operators";
import { Observable, of as observableOf, merge } from "rxjs";

// TODO: Replace this with your own data model type
export interface TableItem {
  Chr: string;
  Start: number;
  End: number;
  Ref: string;
  Alt: string;
  Func_refgene: string;
  Gene_refgene: string;
  omimgene: string;
  OMIMphenotype: string;
  OMIMgenename: string;
  GeneDetailrefGene: string;
  ExonicFuncrefGene: string;
  AAChangerefGene: string;
  phastConsElements46way: string;
  genomicSuperDups: string;
  _1000g2015aug_all: string;
  esp6500siv2_all: string;
  ExAC_ALL: string;
  gnomAD_exome_ALL: string;
  gnomAD_genome_ALL: number;
  cg69: string;
  GIV_CDFD_AAF: number;
  GIV_CDFD_HET: number;
  GIV_CDFD_HOM_VAR: number;
  GIV_Indian_AAF: number;
  GIV_Indian_HET: number;
  GIV_Indian_HOM_VAR: number;
  snp138NonFlagged: string;
  avsnp138: string;
  CLNALLELEID: string;
  CLNDN: string;
  CLNDISDB: string;
  CLNREVSTAT: string;
  CLNSIG: string;
  SIFT_score: string;
  SIFT_pred: string;
  Polyphen2_HDIV_score: string;
  Polyphen2_HDIV_pred: string;
  Polyphen2_HVAR_score: string;
  Polyphen2_HVAR_pred: string;
  MutationTaster_score: string;
  MutationTaster_pred: string;
  CADD: number;
  CADD_Phred: number;
  CADD13_RawScore: string;
  CADD13_PHRED: string;
  MCAP13: string;
  Interpro_domain: string;
  InterVar_automated: string;
  PVS1: string;
  PS1: string;
  PS2: string;
  PS3: string;
  PS4: string;
  PM1: string;
  PM2: string;
  PM3: string;
  PM4: string;
  PM5: string;
  PM6: string;
  PP1: string;
  PP2: string;
  PP3: string;
  PP4: string;
  PP5: string;
  BA1: string;
  BS1: string;
  BS2: string;
  BS3: string;
  BS4: string;
  BP1: string;
  BP2: string;
  BP3: string;
  BP4: string;
  BP5: string;
  BP6: string;
  BP7: string;
  Zygosity: string;
  Total_DP: number;
  Chrom: string;
  Start_1: number;
  Ref_1: string;
  Alt_1: string;
  Qual_score: number;
  Filter: string;
  Otherinfo: string;
  GT_AD_AF_DP_F1R2_F2R1_GQ_PL_GP_PRI_SB_MB;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableItem[] = [
  //   { id: 1, name: "Hydrogen" },
  //   { id: 2, name: "Helium" },
  //   { id: 3, name: "Lithium" },
  //   { id: 4, name: "Beryllium" },
  //   { id: 5, name: "Boron" },
  //   { id: 6, name: "Carbon" },
  //   { id: 7, name: "Nitrogen" },
  //   { id: 8, name: "Oxygen" },
  //   { id: 9, name: "Fluorine" },
  //   { id: 10, name: "Neon" },
  //   { id: 11, name: "Sodium" },
  //   { id: 12, name: "Magnesium" },
  //   { id: 13, name: "Aluminum" },
  //   { id: 14, name: "Silicon" },
  //   { id: 15, name: "Phosphorus" },
  //   { id: 16, name: "Sulfur" },
  //   { id: 17, name: "Chlorine" },
  //   { id: 18, name: "Argon" },
  //   { id: 19, name: "Potassium" },
  //   { id: 20, name: "Calcium" }
];

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<TableItem> {
  data: TableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableItem[]) {
    if (!this.sort.active || this.sort.direction === "") {
      return data;
    }

    // return data.sort((a, b) => {
    //   const isAsc = this.sort.direction === "asc";
    //   switch (this.sort.active) {
    //     case "name":
    //       return compare(a.name, b.name, isAsc);
    //     case "id":
    //       return compare(+a.id, +b.id, isAsc);
    //     default:
    //       return 0;
    //   }
    // });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
