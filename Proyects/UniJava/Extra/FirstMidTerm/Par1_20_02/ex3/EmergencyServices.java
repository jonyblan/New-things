public enum EmergencyServices{
	POLICE("911", "Policia"),
	HEALTH("107", "Ambulancia"),
	FIRE("100", "Bomberos");

	private String num, name;

	public EmergencyServices(String num, String name){
		this.num = num;
		this.name = name;
	}

	public void call(){
		System.out.println(String.format("Llamando a %s al %s", name, num));
	}
}