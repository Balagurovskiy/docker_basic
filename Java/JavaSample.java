/******************************************************************************
 *  Compilation:  javac JavaSample.java
 *  Execution:    java JavaSample
 *		OBALAGUR
 ******************************************************************************/

public class JavaSample {

	private static void printStars(int size) {
		System.out.println("\n");
		for (int i = 0; i < size; i++)
		System.out.print(" *");
		System.out.println("\n");
	}

	private static void printDate() {
		System.out.println("\n");
		java.util.Date date = new java.util.Date();
		System.out.println("\t" + date);
		System.out.println("\n");
	}
    
	public static void main(String[] args) {
		printStars(25);    	
		System.out.println("\t\t\tHello !");
		printDate();
		System.out.println("\tThis is output from JavaSample.class");
		printStars(25); 
	}

}
