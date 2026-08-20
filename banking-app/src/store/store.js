import { configureStore } from "@reduxjs/toolkit";
import { Manager_Adding, account_adding_slice, account_slice, addCounterSlice, add_user, addbranch, employee_adding, employee_login, employee_transaction, manager_login, manager_login_slice, manager_slice } from "../features/enterdata.js";
import { getuserdataslice, getaccountdataslice, gettransactionslice, getbranchslice, get_userSlice, accountSlice, get_manager, get_employee } from "../features/getdata.js";
import { search_account, search_user, searchbranch_Slice, serach_branch, serach_transaction } from "../features/searchslice.js";
import { account_manager_data, employee_manager_data, transaction_manager_data, user_manager_data } from "../features/manager_data/getdata_manager.js";
import { account_employee_data, transaction_employee_data, user_employee_data } from "../features/employee_data/getdata_employee.js";
import { user_pagination } from "../features/pagination.js";

const Store = configureStore({
    reducer: {
        counter: addCounterSlice,
        manager_Login: manager_login,
        employee_data_login:employee_login,
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
        get_user_manager: user_manager_data,
        get_account_manager: account_manager_data,
        get_transaction_manager: transaction_manager_data,
        get_employeedata : get_employee,
        get_employee_manager : employee_manager_data,
        adding_employee :employee_adding,
        employee_transaction: employee_transaction,
        get_user_employee: user_employee_data,
        get_account_employee: account_employee_data,
        get_transaction_employee: transaction_employee_data,

        user_pagination_data : user_pagination
    }
});

export default Store;
