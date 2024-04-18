public class AlarmSystem{
	private CentralAlarmSystem cm;
	private String name;
	private AlarmSensor sensors[];
	private final int INI_SIZE = 2;
	private final int STEP = 1;
	private int currentIndex = 0;

	public AlarmSystem(CentralAlarmSystem cm, String name){
		this.cm = cm;
		this.name = name;
		this.sensors[] = new AlarmSensor[INI_SIZE]; 
	}

	public void addAlarmSensor(String name){
		if(currentIndex + 1 < sensors.size){
			resize();
		}
		sensors[currentIndex] = new AlarmSensor(currentIndex, name);
		currentIndex++;
	}
	
	public void callEmergencyServices(){
		for(EmergencyServices es : CentralAlarmSystem){
			es.call();
		}
	}
}