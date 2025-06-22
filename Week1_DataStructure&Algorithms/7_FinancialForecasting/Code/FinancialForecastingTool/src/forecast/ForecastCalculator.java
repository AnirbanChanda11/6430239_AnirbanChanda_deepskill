package forecast;

public class ForecastCalculator {

	    public static double calculateFutureValue(double presentValue, double rate, int years) {
	        if (years == 0) {
	            return presentValue;
	        }
	        return calculateFutureValue(presentValue, rate, years - 1) * (1 + rate);
	    }

	    public static double calculateFutureValueTail(double presentValue, double rate, int years) {
	        return helper(presentValue, rate, years);
	    }

	    private static double helper(double currentValue, double rate, int yearsLeft) {
	        if (yearsLeft == 0) {
	            return currentValue;
	        }
	        return helper(currentValue * (1 + rate), rate, yearsLeft - 1);
	    }
}


