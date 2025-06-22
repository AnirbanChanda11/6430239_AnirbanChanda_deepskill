package search;

import model.Product;
import java.util.Arrays;
import java.util.Comparator;

public class SearchDemo {
	 public static Product linearSearch(Product[] products, int id) {
	        for (Product p : products) {
	            if (p.getProductId() == id) {
	                return p;
	            }
	        }
	        return null;
	    }
	    public static Product binarySearch(Product[] products, int id) {
	        int low = 0;
	        int high = products.length - 1;

	        while (low <= high) {
	            int mid = (low + high) / 2;
	            int midId = products[mid].getProductId();

	            if (midId == id) {
	                return products[mid];
	            } else if (id < midId) {
	                high = mid - 1;
	            } else {
	                low = mid + 1;
	            }
	        }
	        return null;
	    }

	    public static void sortProducts(Product[] products) {
	        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));
	    }
}
