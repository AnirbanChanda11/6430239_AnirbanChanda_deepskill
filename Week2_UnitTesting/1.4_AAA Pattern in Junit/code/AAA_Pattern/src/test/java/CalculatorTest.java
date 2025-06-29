import static org.junit.Assert.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        // Setup: Arrange
        calculator = new Calculator();
        System.out.println("Setup complete.");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown complete.");
    }

    @Test
    public void testAdd() {
        
        int result = calculator.add(2, 3);
        assertEquals(5, result);
    }

    @Test
    public void testSubtract() {
        int result = calculator.subtract(5, 2);
        assertEquals(3, result);
    }
}
