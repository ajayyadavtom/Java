package enumeration;
import java.util.Scanner;
enum Department {
 CSE, ISE, ECE, MECH
}
public class DepartmentDemo {
 public static void main(String[] args) {
 Scanner sc = new Scanner(System.in);
 System.out.print("Enter department name: ");
 String name = sc.nextLine();
 try {
 Department dept = Department.valueOf(name.toUpperCase());
 System.out.println("Selected Department: " + dept);
 }
   catch (IllegalArgumentException e) {
 System.out.println("Invalid department name.");
 }
 sc.close();
 }
}
