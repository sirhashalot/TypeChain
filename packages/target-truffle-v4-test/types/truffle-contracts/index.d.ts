/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { DataTypesInputContract } from "./DataTypesInput";
import { DataTypesPureContract } from "./DataTypesPure";
import { DataTypesViewContract } from "./DataTypesView";
import { EventsContract } from "./Events";
import { Name12ManglingContract } from "./Name12Mangling";
import { OverloadsContract } from "./Overloads";
import { PayableContract } from "./Payable";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "DataTypesInput"): DataTypesInputContract;
      require(name: "DataTypesPure"): DataTypesPureContract;
      require(name: "DataTypesView"): DataTypesViewContract;
      require(name: "Events"): EventsContract;
      require(name: "NAME12mangling"): Name12ManglingContract;
      require(name: "Overloads"): OverloadsContract;
      require(name: "Payable"): PayableContract;
    }
  }
}

export {
  DataTypesInputContract,
  DataTypesInputInstance,
} from "./DataTypesInput";
export { DataTypesPureContract, DataTypesPureInstance } from "./DataTypesPure";
export { DataTypesViewContract, DataTypesViewInstance } from "./DataTypesView";
export { EventsContract, EventsInstance } from "./Events";
export {
  Name12ManglingContract,
  Name12ManglingInstance,
} from "./Name12Mangling";
export { OverloadsContract, OverloadsInstance } from "./Overloads";
export { PayableContract, PayableInstance } from "./Payable";