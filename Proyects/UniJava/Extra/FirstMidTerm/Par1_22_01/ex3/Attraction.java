public class Attraction{
	private String name;

	public Attraction(String name){
		this.name = name;
	}

	public String getName(){
		return name;
	}

	@Override
	public String toString(){
		return getName();
	}
}