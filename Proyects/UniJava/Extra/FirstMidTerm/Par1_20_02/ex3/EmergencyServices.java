public enum EmergencyServices{
	POLICE("Policia", 911),
	FIRE("Bomberos", 100),
	HEALTH("Ambulancia", 107);

	private String name;
	private int number;

	EmergencyServices(String name, int number){
		this.name = name;
		this.number = number;
	}

	public void call(){
		System.out.println("Llamando a " + toString());
	}

	@Override
	public String toString(){
		return String.format("%s al %d", this.name, this.number);
	}
}