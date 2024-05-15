import java.util.*;
import java.*;

public class SimpleArrayList<E> extends ArrayList<E> implements SimpleList<E> {

   @Override
   public <K> Map<K, E> toMap(Function<E, K> keyMapper) {
       Map<K,E> map = new HashMap<>();
       for(E element : this) {
           map.putIfAbsent(keyMapper.apply(element), element);
       }
       return map;
   }

}
