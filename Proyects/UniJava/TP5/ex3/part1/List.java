public class List<A> implements LinearList<A>{
	private Node<A> first;

	@Override
	public void add(A obj){
		Node<A> currentNode = first;
		Node<A> newNode = new Node<>(obj);
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
	public A get(int i){
		Node<A> objectiveNode = findNode(i);
		return objectiveNode.head;
	}

	@Override
	public void set(int i, A obj){
		Node<A> objectiveNode = findNode(i);
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
			Node<A> previous = first;
			Node<A> currentNode = first.tail;
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
	public int indexOf(A obj){
		Node<A> currentNode = first;
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
		Node<A> currentNode = first;
		int index = 0;
		while(currentNode != null){
			index++;
			currentNode = currentNode.tail;
		}

		return index;
	}

	private Node<A> findNode(int i){
		Node<A> currentNode = first;
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

	private static class Node<A> {

       private A head;
       private Node<A> tail;

       Node(A head) {
           this.head = head;
           this.tail = tail;
       }

   }

}