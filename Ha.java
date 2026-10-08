package shape;
class Shape {
 String color;
 void draw() {
 System.out.println("Drawing Shape");
 }
 void erase() {
 System.out.println("Erasing Shape");
 }
}
class Circle extends Shape {
 double radius;
 void draw() {
 System.out.println("Drawing Circle");
 System.out.println("Radius: " + radius);
 }
 void erase() {
 System.out.println("Erasing Circle");
 }
}
class Triangle extends Shape {
 int base, height;
  void draw() {
 System.out.println("Drawing Triangle");
 System.out.println("Base: " + base);
 System.out.println("Height: " + height);
 }
 void erase() {
 System.out.println("Erasing Triangle");
 }
}
class Square extends Shape {
 int side;
 void draw() {
 System.out.println("Drawing Square");
 System.out.println("Side: " + side);
 }
 void erase() {
 System.out.println("Erasing Square");
 }
}
public class ShapeDemo {
 public static void main(String[] args) {
 Circle c = new Circle();
 c.color = "Red";
 c.radius = 5;
 Triangle t = new Triangle();
 t.color = "Blue";
 t.base = 10;
 t.height = 8;
 Square s = new Square();
 s.color = "Green";
 s.side = 6;
 Shape shape;
 shape = c;
 shape.draw();
 shape.erase();
 shape = t;
   shape.draw();
 shape.erase();
 shape = s;
 shape.draw();
 shape.erase();
 }
}
