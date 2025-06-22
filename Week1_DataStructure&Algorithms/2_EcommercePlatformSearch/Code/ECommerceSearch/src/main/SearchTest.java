package main;

import model.Product;
import search.SearchDemo;

public class SearchTest {
	public static void main(String[] args) {
        Product[] products = {
            new Product(104, "Mouse", "Electronics"),
            new Product(101, "Laptop", "Electronics"),
            new Product(103, "Keyboard", "Electronics"),
            new Product(102, "Phone", "Electronics"),
        };

        System.out.println("=== Linear Search ===");
        Product found = SearchDemo.linearSearch(products, 103);
        System.out.println(found != null ? found : "Product not found");

        System.out.println("\n=== Binary Search ===");
        SearchDemo.sortProducts(products);  
        Product foundBinary = SearchDemo.binarySearch(products, 103);
        System.out.println(foundBinary != null ? foundBinary : "Product not found");
    }
}
