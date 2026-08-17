import { configureStore } from "@reduxjs/toolkit";
import { Manager_Adding, account_slice, addCounterSlice, add_user, addbranch, manager_login, manager_login_slice, manager_slice } from "../features/enterdata.js";
import { getuserdataslice, getaccountdataslice, gettransactionslice, getbranchslice, get_userSlice, accountSlice, get_manager } from "../features/getdata.js";
import { search_account, search_user, searchbranch_Slice, serach_branch, serach_transaction } from "../features/searchslice.js";

const Store = configureStore({
    reducer: {
        counter: addCounterSlice,
        manager_Login: manager_login,
        addbranchs: addbranch,
        getuser: getuserdataslice,
        getaccount: getaccountdataslice,
        gettransaction: gettransactionslice,
        getmanager: get_manager,
        getbranch: getbranchslice,
        serach_branch: serach_branch,
        adding_user: add_user,
        geting_user: get_userSlice,
        search_User: search_user,
        aading_account: account_slice,
        search_Account: search_account,
        serach_Transactiondata: serach_transaction,
        manager_adding: manager_slice,
    }
});

export default Store;