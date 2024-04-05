public class Call {

   protected String from, to;
   private int duration;

   protected double cost = 98;

   Call(String from, String to, int duration) {
       this.from = from;
       this.to = to;
       this.duration = duration;
   }

   public double getCost() {
       return duration * cost;
   }

   public void setCost(int cost){
	this.cost = cost;
   }

}
