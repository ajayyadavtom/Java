
package thread;
class MyThread extends Thread {
 // Constructor
 MyThread(String name) {
 super(name); // Calls Thread class constructor
 }
 // run() method
 public void run() {
 for (int i = 1; i <= 5; i++) {
 System.out.println("Child Thread: " + i);
 try {
 Thread.sleep(500);
 } catch (InterruptedException e) {
 System.out.println(e);
 }
 }
 }
}
public class ThreadDemo {
 public static void main(String[] args) {
 // Create child thread
 MyThread t = new MyThread("My Child Thread");
 // Start child thread
 t.start();
 // Main thread
 for (int i = 1; i <= 5; i++) {
 System.out.println("Main Thread: " + i);
 try {
 Thread.sleep(500);
 } catch (InterruptedException e) {
 System.out.println(e);
 }
 }
 }
}
