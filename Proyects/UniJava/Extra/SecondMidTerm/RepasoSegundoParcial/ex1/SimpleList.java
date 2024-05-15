import java.util.*;
import java.*;

public interface SimpleList<E> extends List<E> {

   <K> Map<K,E> toMap(Function<E, K> keyMapper);

}
