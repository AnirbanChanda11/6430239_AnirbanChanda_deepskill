package main;

import forecast.ForecastCalculator;

public class ForecastTest {
	 public static void main(String[] args) {
	        double presentValue = 1000.0;
	        double rate = 0.05; 
	        int years = 10;

	        System.out.println("=== Recursive Forecast ===");
	        double futureValue = ForecastCalculator.calculateFutureValue(presentValue, rate, years);
	        System.out.printf("Future Value (standard recursion): $%.2f%n", futureValue);

	        System.out.println("=== Tail-Recursive Forecast ===");
	        double tailValue = ForecastCalculator.calculateFutureValueTail(presentValue, rate, years);
	        System.out.printf("Future Value (tail recursion): $%.2f%n", tailValue);
	    }
}
