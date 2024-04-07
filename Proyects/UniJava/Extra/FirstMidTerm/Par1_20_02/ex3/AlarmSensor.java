public class AlarmSensor extends Sensor{
	private boolean activated;
	private AlarmSystem alarmSystem;

	public AlarmSensor(int id, String name, AlarmSystem alarmSystem){
		super(id, name);
		this.activated = false;
		this.alarmSystem = alarmSystem;
	}

	@Override
	public void motionDetected(){
		if(!activated){
			return ;
		}
		super.motionDetected();
		alarmSystem.callEmergency();
	}

	public void activate(){
		System.out.println(super.toString() + " activado");
		activated = true;
	}

	public void deactivate(){
		System.out.println(super.toString() + " desactivado");
		activated = false;
	}
}