public class AlarmSensor extends Sensor{
	private boolean activated;
	private AlarmSystem as;

	public AlarmSensor(int id, String name, AlarmSystem as){
		super(id, name);
		this.activated = false;
		this.as = as;
	}

	@Override
	public void motionDetected(){
		if(!activated){
			super.motionDetected();
		}
		
	}

	public void activate(){
		this.activated = true;
	}

	public void deactivate(){
		this.activated = false;
	}
}