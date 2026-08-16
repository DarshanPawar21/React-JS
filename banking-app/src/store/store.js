import { configureStore } from "@reduxjs/toolkit";
import { addCounterSlice, add_user, addbranch } from "../features/enterdata.js";
import { getuserdataslice, getaccountdataslice, gettransactionslice, getbranchslice,get_userSlice } from "../features/getdata.js";
import { search_user, searchbranch_Slice, serach_branch } from "../features/searchslice.js";

const Store = configureStore({
    reducer: {
        counter: addCounterSlice,
        addbranchs: addbranch,
        getuser: getuserdataslice,
        getaccount: getaccountdataslice,
        gettransaction: gettransactionslice,
        getbranch: getbranchslice,
        serach_branch : serach_branch,
        adding_user : add_user,
        geting_user : get_userSlice,
        search_User :search_user,
    }
});

export default Store;