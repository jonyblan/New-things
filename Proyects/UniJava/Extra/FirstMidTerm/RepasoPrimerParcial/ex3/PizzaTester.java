public class PizzaTester {

  public static void main(String[] args) {
     // Pizza a la parrilla con Tomate
     Pizza pizza1 = new Pizza(PizzaTypes.GRILL, new Toppings[]{Toppings.TOMATO});
     // Pizza a la parrilla con Tomate con Cebolla con Extra queso
     Pizza pizza2 = new Pizza(PizzaTypes.GRILL, new Toppings[]{Toppings.TOMATO, Toppings.CHEESE});
     // Pizza al horno con Cebolla con Extra queso
     Pizza pizza3 = new Pizza(PizzaTypes.OVEN, new Toppings[]{Toppings.CHEESE});
     System.out.println(pizza1);
     System.out.println(pizza2);
     System.out.println(pizza3);
  }

}
