public class PizzaTester {

  public static void main(String[] args) {
     // Pizza a la parrilla con Tomate
     Pizza pizza1 = new Pizza(PizzaTypes.valueOf("Grill"), new Toppings[]{Toppings.valueOf("Tomato")});
     // Pizza a la parrilla con Tomate con Cebolla con Extra queso
     Pizza pizza2 = new Pizza(PizzaTypes.valueOf("Grill"), new Toppings[]{Toppings.valueOf("Tomato"), Toppings.valueOf("Onion"), Toppings.valueOf("ExtraCheese")});
     // Pizza al horno con Cebolla con Extra queso
     Pizza pizza3 = new Pizza(PizzaTypes.valueOf("Oven"), new Toppings[]{Toppings.valueOf("Onion"), Toppings.valueOf("ExtraCheese")});
     System.out.println(pizza1);
     System.out.println(pizza2);
     System.out.println(pizza3);
  }

}
