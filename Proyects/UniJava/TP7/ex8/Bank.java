import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Bank{
	private Set<Account> accounts;
	
	public Bank(){
		this.accounts = new HashSet<Account>();
	}

	public void addAccount(Account acc){
		accounts.add(acc);
	}

	public void removeAccount(Account acc){
		accounts.remove(acc);
	}

	public int accountSize(){
		return accounts.size();
	}

	public double totalAmount(){
		double ret = 0;
		for(Account account : accounts){
			ret += account.getAmmount();
		}
		return ret;
	}
}