SET SERVEROUTPUT ON;
-- scenario 1
DECLARE
    CURSOR cur_customers IS
        SELECT CustomerID, DOB FROM Customers;

    v_customer_id   Customers.CustomerID%TYPE;
    v_dob           Customers.DOB%TYPE;
    v_age           NUMBER;

BEGIN
    FOR customer_rec IN cur_customers LOOP
        v_customer_id := customer_rec.CustomerID;
        v_dob := customer_rec.DOB;

        -- Calculate age
        v_age := TRUNC(MONTHS_BETWEEN(SYSDATE, v_dob) / 12);

        -- Check if age > 60
        IF v_age > 60 THEN
            -- Apply 1% discount to loan interest rate
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = v_customer_id;

            DBMS_OUTPUT.PUT_LINE('Applied discount for Customer ID: ' || v_customer_id || ', Age: ' || v_age);
        END IF;
    END LOOP;

    COMMIT;
END;
/

-- scenario 2

ALTER TABLE Customers ADD IsVIP CHAR(1) DEFAULT 'N' CHECK (IsVIP IN ('Y', 'N'));

BEGIN
    FOR cust_rec IN (SELECT CustomerID, Balance FROM Customers) LOOP
        IF cust_rec.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'Y'
            WHERE CustomerID = cust_rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE('Customer ID ' || cust_rec.CustomerID || ' promoted to VIP.');
        END IF;
    END LOOP;

    COMMIT;
END;
/

-- scenario 3

DECLARE
    CURSOR due_loans_cur IS
        SELECT 
            L.LoanID,
            L.CustomerID,
            C.Name,
            L.EndDate
        FROM 
            Loans L
        JOIN 
            Customers C ON L.CustomerID = C.CustomerID
        WHERE 
            L.EndDate BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN
    FOR loan_rec IN due_loans_cur LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ID ' || loan_rec.LoanID || 
            ' for customer ' || loan_rec.Name || 
            ' (Customer ID: ' || loan_rec.CustomerID || 
            ') is due on ' || TO_CHAR(loan_rec.EndDate, 'YYYY-MM-DD')
        );
    END LOOP;
END;
/






