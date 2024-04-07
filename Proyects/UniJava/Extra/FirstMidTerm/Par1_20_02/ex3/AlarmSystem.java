import java.util.Arrays;

public class AlarmSystem{
	private String name;
	private CentralAlarmSystem centralAlarmSystem;
	private int currentId; // has the next id (currentId = 4 --> there are 4 sensors [0 - 3])
	private AlarmSensor alarmSensors[];
	private final int STARTING_SIZE = 5;
	private final int STEP = 2;

	public AlarmSystem(CentralAlarmSystem centralAlarmSystem, String name){
		this.centralAlarmSystem = centralAlarmSystem;
		this.name = name;
		this.currentId = 0;
		this.alarmSensors = new AlarmSensor[STARTING_SIZE];
	}

	public AlarmSensor addAlarmSensor(String name){
		if(currentId == alarmSensors.length){
			resize();
		}
		alarmSensors[currentId] = new AlarmSensor(currentId, name, this);
		currentId++;	
		return alarmSensors[currentId-1];
	}

	public void activate(){
		System.out.println("Activando alarma de sensores de " + name);
		for(int i = 0; i < currentId; i++){
			alarmSensors[i].activate();
		}
	}

	public void deactivate(){
		System.out.println("Desctivando alarma de sensores de " + name);
		for(int i = 0; i < currentId; i++){
			alarmSensors[i].deactivate();
		}
	}

	private void resize(){
		alarmSensors = Arrays.copyOf(alarmSensors, currentId + STEP);
	}

	public void callEmergency(){
		for(EmergencyServices es : centralAlarmSystem.getEmergencyServices()){
			es.call();
		}
	}
}