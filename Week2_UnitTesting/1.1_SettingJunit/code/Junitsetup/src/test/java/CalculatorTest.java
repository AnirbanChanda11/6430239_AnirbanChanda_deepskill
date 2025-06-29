import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {
	@Test
    public void testAddition() {
        int expected = 5;
        int actual = 2 + 3;
        assertEquals(expected, actual);
    }
}
