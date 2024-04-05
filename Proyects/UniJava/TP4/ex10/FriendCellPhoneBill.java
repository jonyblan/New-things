import java.util.Arrays;

public class FriendCellPhoneBill extends CellPhoneBill{
	private String number;
	private final int maxFriends;
	private String[] friends = {};
	private static int friendsIndex = 0;

	private final double DISCOUNT_PERCENTAGE = 0.25;


	public FriendCellPhoneBill(String number, int maxFriends){
		super(number);
		this.maxFriends = maxFriends;
	}

	public void addFriend(String number) throws TooManyFriendsException, AlreadyExistsFriendException{
		if(friendsIndex == friends.length){
			resize();
		}
		if(friendsIndex == maxFriends){
			throw new TooManyFriendsException(number);
		}
		if(this.containsFriend(number) == 1){
			throw new AlreadyExistsFriendException(number);
		}
		friends[friendsIndex] = number;
		friendsIndex++;
	}

	public void removeFriend(String number) throws FriendNotFoundException{
		int numIndex = this.getFriendNumberIndex(number);
		if(numIndex == -1){
			throw new FriendNotFoundException(number);
		}
		friends[numIndex] = friends[friendsIndex];
		friendsIndex--;
	}

	private int getFriendNumberIndex(String number){
		for(int i = 0; i <= friendsIndex; i++){
			if(this.friends[i].equals(number) == true){
				return i;
			}
		}
		return -1;
	}

	private int containsFriend(String number){
		for(int i = 0; i < friendsIndex; i++){
			if(calls[i].to.equals(friends[i]) == true){
				return 1;
			}
		}
		return 0;
	}

	@Override
	public double processBill(){
		double total = 0;
		for(int i = 0; i < callsIndex; i++){
			double current = calls[i].getCost();
			total += current - current * DISCOUNT_PERCENTAGE * containsFriend(calls[i].to);
		}
		return total;
	}

	private void resize(){
		friends = Arrays.copyOf(friends, friends.length + 10);
	}
}