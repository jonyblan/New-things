import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Ej2 {
	public static void main(String[] args) {
		List<Integer> list = new ArrayList<>();
		list.add(1);
		list.add(6);
		list.add(8);
		list.add(10);
		Iterator<Integer> it = list.iterator();
		while(it.hasNext()){
			if(it.next() % 2 == 0){
				it.remove();
			}
		}
		System.out.println(list);
	}
}