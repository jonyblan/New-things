public class AlarmSystemTester {
	public static void main(String[] args) {
		CentralAlarmSystem central = new CentralAlarmSystem(
			new EmergencyServices[]{EmergencyServices.POLICE, EmergencyServices.FIRE});
			
		AlarmSystem alarmSystem = new AlarmSystem(central, "Casa");
		Sensor doorSensor = alarmSystem.addAlarmSensor("Puerta");
		Sensor windowSensor = alarmSystem.addAlarmSensor("Ventana");

		System.out.println("##########");
		doorSensor.motionDetected();
		System.out.println("##########");
		alarmSystem.activate();
		System.out.println("##########");
		windowSensor.motionDetected();
		System.out.println("##########");
		alarmSystem.deactivate();
		System.out.println("##########");
		doorSensor.motionDetected();
		System.out.println("##########");

		central.setEmergencyServices(
			new EmergencyServices[]{EmergencyServices.HEALTH}
		);

		System.out.println("##########");
		alarmSystem.activate();
		System.out.println("##########");
		doorSensor.motionDetected();
		System.out.println("##########");
		Sensor balconySensor = alarmSystem.addAlarmSensor("Balcón");
		balconySensor.motionDetected();
		System.out.println("##########");
	}
}