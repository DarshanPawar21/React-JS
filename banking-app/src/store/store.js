import { configureStore } from "@reduxjs/toolkit";
import { addCounterSlice, addbranch } from "../features/enterdata.js";
import { getuserdataslice, getaccountdataslice, gettransactionslice, getbranchslice } from "../features/getdata.js";
import { searchbranch_Slice, serach_branch } from "../features/searchslice.js";

const Store = configureStore({
    reducer: {
        counter: addCounterSlice,
        addbranchs: addbranch,
        getuser: getuserdataslice,
        getaccount: getaccountdataslice,
        gettransaction: gettransactionslice,
        getbranch: getbranchslice,
        serach_branch : serach_branch,
    }
});

export default Store;