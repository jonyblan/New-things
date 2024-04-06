public class List implements LinearList{
	private Node first;

	@Override
	public void add(Object obj){
		Node currentNode = first;
		Node newNode = new Node(obj);
		if(currentNode == null){
			first = newNode;
		}
		else{
			while(currentNode.tail != null){
				currentNode = currentNode.tail;
			}
			currentNode.tail = newNode;
		}
	}

	@Override
	public Object get(int i){
		Node objectiveNode = findNode(i);
		return objectiveNode.head;
	}

	@Override
	public void set(int i, Object obj){
		Node objectiveNode = findNode(i);
		objectiveNode.head = obj;
	}

	@Override
	public void remove(int i){
		if(i < 0){
			throw new IndexOutOfBoundsException();
		}
		if(i > size()){
			throw new IndexOutOfBoundsException();
		}
		if(i == 0){
			first = first.tail;
		}
		else{
			Node previous = first;
			Node currentNode = first.tail;
			int index = 1;
			while(index != i){
				previous = previous.tail;
				currentNode = currentNode.tail;
				index++;
			}
			previous.tail = currentNode.tail;
		}
	}

	@Override
	public int indexOf(Object obj){
		Node currentNode = first;
		int index = 0;
		while(currentNode != null && currentNode.head != obj){
			index++;
			currentNode = currentNode.tail;
		}
		if(currentNode == null){
			return -1;
		}
		return index;
	}

	@Override
	public int size(){
		Node currentNode = first;
		int index = 0;
		while(currentNode != null){
			index++;
			currentNode = currentNode.tail;
		}

		return index;
	}

	private Node findNode(int i){
		Node currentNode = first;
		int index = 0;
		if(i < 0){
			throw new IndexOutOfBoundsException();
		}
		while(currentNode != null && index < i){
			index++;
			currentNode = currentNode.tail;
		}
		if(currentNode == null){
			throw new IndexOutOfBoundsException();
		}
		return currentNode;
	}

	private static class Node {

       private Object head;
       private Node tail;

       Node(Object head) {
           this.head = head;
           this.tail = tail;
       }

   }

}