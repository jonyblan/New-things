import java.util.Arrays;
import java.util.EmptyStackException;

public class ArrayStack<E> implements Stack<E>{
	private E[] elements;
	private final int DEFAULT_SIZE = 10;
	protected int size;

	@SuppressWarnings("unchecked")
	public ArrayStack(){
		elements = (E[]) new Object [DEFAULT_SIZE];
		size = 0;
	}

	@Override
	public E pop(){
		E ret = peek();
		size--;
		return ret;
	}

	@Override
	public E peek(){
		if(isEmpty()){
			throw new EmptyStackException();
		}
		return elements[size - 1];
	}

	@Override
	public boolean isEmpty(){
		return (size == 0);
	}

	@Override
	public void push(E element){
		if(size == DEFAULT_SIZE){
			resize();
		}
		elements[size] = element;
		size++;
	}

	private void resize(){
		elements = Arrays.copyOf(elements, size + DEFAULT_SIZE);
	}

	@Override
	public String toString(){
		String strr = "[";
		for(int i = 0; i < size - 1; i++){
			strr += elements[i];
			strr += ",";
		}
		strr += elements[size - 1];
		strr += "]";
		return strr;
	}
}