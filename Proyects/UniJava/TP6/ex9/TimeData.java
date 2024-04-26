public class TimeData<T>{
	private T data;
	private int hours, minutes;

	public TimeData(T data, int hours, int minutes){
		this.data = data;
		this.hours = hours;
		this.minutes = minutes;
	}
}