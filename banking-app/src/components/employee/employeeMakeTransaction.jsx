import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/branchs.css";
import { useDispatch, useSelector } from "react-redux";
import { Employee_Transaction_Adding } from "../../features/enterdata";
import { get_employee_data } from "../../features/getdata";
import { get_accountdata_employee, get_transactiondata_employee } from "../../features/employee_data/getdata_employee";

function Employee_Make_Transaction() {
    const dispatch = useDispatch();
    const { loading, error, loginMessage } = useSelector((state) => state.employee_transaction || {});
    const { Employee_data = [] } = useSelector((state) => state.get_employeedata || {});

    const Mr_Employee = JSON.parse(localStorage.getItem("employee_login") || "{}");
    const real_employee = Employee_data.find((e) => e?.Employee_email === Mr_Employee?.email || e?.Employee_email === Mr_Employee?.Employee_email);
    const Employee_IFSCCode = Mr_Employee?.IFSCCode || real_employee?.IFSCCode || "";

    const [transaction, setTransaction] = useState({
        accountNumber: "",
        transactionType: "credit",
        tranamount: "",
        IFSCCode: "",
    });

    useEffect(() => {
        dispatch(get_employee_data());
    }, [dispatch]);

    useEffect(() => {
        setTransaction((prev) => ({ ...prev, IFSCCode: Employee_IFSCCode }));
    }, [Employee_IFSCCode]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransaction({ ...transaction, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(Employee_Transaction_Adding(transaction));

        if (Employee_Transaction_Adding.fulfilled.match(result)) {
            setTransaction((prev) => ({
                ...prev,
                accountNumber: "",
                transactionType: "credit",
                tranamount: "",
            }));

            if (Employee_IFSCCode) {
                dispatch(get_accountdata_employee(Employee_IFSCCode));
                dispatch(get_transactiondata_employee(Employee_IFSCCode));
            }
        }
    };

    return (
        <div className="cbs-branch-form">
            <div className="cbs-branch-form__header">
                <h2 className="cbs-branch-form__title">Make Transaction</h2>
                <p className="cbs-branch-form__subtitle">
                    Credit or debit money from a customer account in your branch.
                </p>
            </div>

            <div className="cbs-card cbs-branch-form__card">
                <form onSubmit={handleSubmit}>
                    <div className="cbs-branch-form__grid">
                        <div className="cbs-field">
                            <label>Account Number</label>
                            <input
                                type="text"
                                className="cbs-field__input"
                                placeholder="Enter account number"
                                name="accountNumber"
                                value={transaction.accountNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="cbs-field">
                            <label>Transaction Type</label>
                            <select
                                className="cbs-field__input"
                                name="transactionType"
                                value={transaction.transactionType}
                                onChange={handleChange}
                            >
                                <option value="credit">Credit</option>
                                <option value="debit">Debit</option>
                            </select>
                        </div>

                        <div className="cbs-field">
                            <label>Amount</label>
                            <input
                                type="number"
                                className="cbs-field__input"
                                placeholder="Enter amount"
                                name="tranamount"
                                value={transaction.tranamount}
                                onChange={handleChange}
                                min="1"
                                required
                            />
                        </div>

                        <div className="cbs-field">
                            <label>IFSC Code</label>
                            <input
                                type="text"
                                className="cbs-field__input"
                                name="IFSCCode"
                                value={transaction.IFSCCode}
                                readOnly
                            />
                        </div>
                    </div>

                    {error && <p className="cbs-form-message cbs-form-message--error">{error}</p>}
                    {loginMessage && <p className="cbs-form-message cbs-form-message--success">{loginMessage}</p>}

                    <div className="cbs-branch-form__actions">
                        <Link to="/employee/dashboard/transactions" className="cbs-btn cbs-btn--secondary">
                            View Transactions
                        </Link>
                        <button type="submit" className="cbs-btn cbs-btn--warning" disabled={loading || !transaction.IFSCCode}>
                            {loading ? "Processing..." : "Submit Transaction"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Employee_Make_Transaction;
