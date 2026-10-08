package Details;
import java.util.Scanner;
class Student {
 String USN;
 String Name;
 String Branch;
 String Phone;
 void getDetails(Scanner sc) {
 System.out.print("Enter USN: ");
 USN = sc.nextLine();
 System.out.print("Enter Name: ");
 Name = sc.nextLine();
 System.out.print("Enter Branch: ");
 Branch = sc.nextLine();
 System.out.print("Enter Phone: ");
 Phone = sc.nextLine();
 }
 void displayDetails() {
 System.out.println(USN + "\t" + Name + "\t" + Branch + "\t" + Phone);
 }
}
public class StudentDemo {
 public static void main(String[] args) {
 Scanner sc = new Scanner(System.in);
 System.out.print("Enter number of students: ");
 int n = sc.nextInt();
 sc.nextLine();
 Student s[] = new Student[n];
 for (int i = 0; i < n; i++) {
 System.out.println("\nEnter details of Student " + (i + 1));
 s[i] = new Student();
 s[i].getDetails(sc);
 }
 System.out.println("\n----- Student Details -----");
System.out.println("USN\tName\tBranch\tPhone");
 for (int i = 0; i < n; i++) {
 s[i].displayDetails();
 }
 }
}
Output:-
Enter number of students: 3
Enter details of Student 1
Enter USN: 101
Enter Name: rahul
Enter Branch: CSE
Enter Phone: 12345
Enter details of Student 2
Enter USN: 102
Enter Name: seema
Enter Branch: ECE
Enter Phone: 23456
Enter details of Student 3
Enter USN: 103
Enter Name: suhas
Enter Branch: EEE
Enter Phone: 67891
