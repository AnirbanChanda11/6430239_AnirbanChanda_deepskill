SET SERVEROUTPUT ON;

--scenario 1
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE Accounts
    SET 
        Balance = Balance * 1.01,
        LastModified = SYSDATE
    WHERE 
        AccountType = 'Savings';

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Monthly interest to all savings accounts.');
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/

--scenario 2

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department IN VARCHAR2,
    p_bonus_pct  IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET 
        Salary = Salary + (Salary * p_bonus_pct / 100)
    WHERE 
        Department = p_department;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Bonuses applied to department: ' || p_department || 
                         ' with bonus percentage: ' || p_bonus_pct || '%');
END;
/

BEGIN
    UpdateEmployeeBonus('IT', 20);
END;


--scenario 3

CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account_id IN NUMBER,
    p_to_account_id   IN NUMBER,
    p_amount          IN NUMBER
) IS
    v_from_balance Accounts.Balance%TYPE;
    v_to_balance   Accounts.Balance%TYPE;

    e_insufficient_balance EXCEPTION;
    e_account_not_found    EXCEPTION;

BEGIN
    SELECT Balance INTO v_from_balance 
    FROM Accounts 
    WHERE AccountID = p_from_account_id;

    SELECT Balance INTO v_to_balance 
    FROM Accounts 
    WHERE AccountID = p_to_account_id;

    IF v_from_balance < p_amount THEN
        RAISE e_insufficient_balance;
    END IF;

    UPDATE Accounts
    SET Balance = Balance - p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_from_account_id;

    UPDATE Accounts
    SET Balance = Balance + p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_to_account_id;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Transfer successful: ' || p_amount || 
                         ' transferred from Account ID ' || p_from_account_id || 
                         ' to Account ID ' || p_to_account_id);

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RAISE_APPLICATION_ERROR(-20001, 'One or both accounts do not exist.');
    WHEN e_insufficient_balance THEN
        RAISE_APPLICATION_ERROR(-20002, 'Insufficient balance in source account.');
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE_APPLICATION_ERROR(-20003, 'Unexpected error: ' || SQLERRM);
END;
/

BEGIN
    TransferFunds(1, 2, 300);  -- Transfer $100 from Account 1 to Account 2
END;
/
