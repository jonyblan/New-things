#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

#define CANT_OPTIONS 6

struct item {
    string name;
    int quantity;
    int price;

    // constructor. Name should have an impossible name, quantity and price the default values
    item() : name(""), quantity(0), price(0) {}
};

void start() {
    cout << "Welcome to the inventory manager." << endl;
}

void showItem(item data) {
    cout << "Name: " << data.name << ", Price: " << data.price << ", Quantity: " << data.quantity << endl;
}

// leaves in option the chosen option
void menu(int * option) {
    while(*option < 0 || *option > CANT_OPTIONS) {
        cout << "What do you want to do?" << endl;
        cout << "0: Exit" << endl;
        cout << "1: Add a new item" << endl;
        cout << "2: Search for an item" << endl;
        cout << "3: Update an item" << endl;
        cout << "4: Sort and show items by value" << endl;
        cout << "5: Sort and show items by name" << endl;
        cout << "6: Calculate total item value" << endl;
        cin >> *option;
    }
}

bool isPositive(int data) {
    return data > 0;
}

// prints msg and returns a string different from the constructor printing
string getStr(string msg) {
    string aux;
    item a = item();
    while (aux == a.name) {
        cout << msg << endl;
        cin >> aux;
    }
    return aux;
}

// prints msg and returns a positive integer
int getPositive(string msg) {
    int aux = -1;
    while (!isPositive(aux)) {
        cout << msg << endl;
        cin >> aux;
    }
    return aux;
}

// returns the item which is called name, and the constructor if it doesnt exist
item isThereItemName(vector<item>& inventory, string name) {
    int len = inventory.size(), i;
    for (i = 0; i < len; i++) {
        if (name == inventory[i].name) {
            return inventory[i];
        }
    }
    item constructor = item();
    return constructor;
}

// the message has to inform that the answer must be y/n
bool ynToBool(string msg) { 
    string aux;
    bool cont = true;
    while (cont) {
        cout << msg << endl;
        cin >> aux;
        if (aux == "y" || aux == "Y") {
            return true;
        }
        else if (aux == "n" || aux == "N") {
            return false;
        }
    }
}

// searches an item through the inventory
item searchItem(vector<item> inventory) {
    string name, aux;
    bool cont = true, rta;
    item constructor = item();
    while (cont) {
        name = getStr("Please enter the item's name");
        item itemRta = isThereItemName(inventory, name);
        if (itemRta.name != constructor.name) {
            return itemRta;
        }
        cout << "Item is not yet added" << endl;
		cont = ynToBool("Try another name? (y/n)");
    }
    return constructor;
}

// searches and shows an item
void searchForItem(vector<item>& inventory) {
    item aux = searchItem(inventory), constructor = item();
    if (aux.name != constructor.name) {
        showItem(aux);
    }
}

// asks the user for an item's name
string askName(){
	string name;
	item constructor = item();
	getStr("Please enter the item's name");
    equal = (isThereItemName(inventory, name).name != constructor.name);
	while (equal) {
        name = getStr("Please enter a name that isn't in use");
        equal = (isThereItemName(inventory, name).name != constructor.name);
    }
	return name;
}

// asks the user for an item's price
int askPrice(){
	return getPositive("What's the item's price?");
}

// asks the user for an item's quantity
int askQuantity(){
	return getPositive("How much inventory of that item is there?");
}

// asks the user for the values of an item
item askItem(vector<item> inventory) {
    bool equal = true;
    item newItem = item();
    newItem.name = askName();
    newItem.price = askPrice();
    newItem.quantity = askQuantity();
    return newItem;
}

// adds an item to the inventory
void addItem(vector<item>& inventory) {
    item newItem = askItem(inventory);
    inventory.push_back(newItem);
}

// returns the index of name in inventory, or -1 if it isnt there
int isThereItemNameInt(vector<item> inventory, string name) {
    int len = inventory.size(), i;
    for (i = 0; i < len; i++) {
        if (name == inventory[i].name) {
            return i;
        }
    }
    return -1;
}

// searches for an item's index
int searchIndex(vector<item> inventory) {
    string name;
    bool cont = true;
	int indexRta;
    while (cont) {
        name = askName();
        indexRta = isThereItemNameInt(inventory, name);
        if (indexRta == -1) {
            cout << "Item is not yet added" << endl;
            cont = ynToBool("Try another name? (y/n)");
        }
        else {
            return indexRta;
        }
    }
    return -1;
}

// updates the price and quantity of an item
void updateItem(vector<item>& inventory) {
    int indexToUpdate = searchIndex(inventory), newPrice, newQuantity;
    if (aux == -1) {
        return;
    }
    showItem(inventory[indexToUpdate]);
    newPrice = askPrice();
    newQuantity = askQuantity();
    inventory[indexToUpdate].price = newPrice;
    inventory[indexToUpdate].quantity = newQuantity;
}

void showInventory(vector<item> inventory){
	const int size = inventory.size();
	for (int i = 0; i < size; i++) {
        showItem(inventory[i]);
    }
}

// sorts and shows the inventory by price from cheapest to most expensive
void sortByValue(vector<item>& inventory) { // made a bubble sort for clarity because more complex sorting algorithms will be looked upon in /proyects/smallC/organize
    bool organized = false;
    int i, j, const size = inventory.size();
    for (i = 0; i < size-1 && !organized; i++) {
        for (j = 0; j < size - i; j++) {
			checkChange(inventory, j);
            if (inventory[j].price > inventory[j + 1].price) {
                swap(inventory[j], inventory[j + 1]);
            }
        }
    }
    showInventory();
}

// sorts and shows the inventory by price from a to z
void sortByName(vector<item>& inventory) { // made a bubble sort because more complex sorting algorithms will be looked upon in /proyects/smallC/organize
    bool organized = false;
    int i, j, const size = inventory.size();
    for (i = 0; i < size - 1 && !organized; i++) {
        organized = true;
        for (j = i; j < size - 1; j++) {
            if (inventory[j].name > inventory[j + 1].name) {
                organized = false;
                swap(inventory[j], inventory[j + 1]);
            }
        }
    }
	showInventory(inventory);
}

// returns the value of the item in index position
int valueItem(vector<item> inventory, int index){
	return (inventory[i].price * inventory[i].quantity);
}

// gets the total value of everything in the inventory
void totalValue(vector<item> inventory) {
    int i, size = inventory.size(), count = 0;
    for (i = 0; i < size; i++) {
        count += valueItem(inventory, i);
    }
    cout << "The total value of everything in the inventory is: $" << count << endl;
}

// analized the option chosen
void analizeOption(int option, vector<item>& inventory) {
    switch (option){
    case 0:
        break;
    case 1:
        addItem(inventory);
        break;
    case 2:
        searchForItem(inventory);
        break;
    case 3:
        updateItem(inventory);
        break;
    case 4:
        sortByValue(inventory);
        break;
    case 5:
        sortByName(inventory);
        break;
    case 6:
        totalValue(inventory);
        break;
    default:
        cout << "Error in analizeOption" << endl;
        exit(1);
        break;
    }
}

void end() {
    cout << "Thanks for using the program";
}

int main(void) {
    vector<item> inventory;
    int option = -1;
    start();
    while (option) {
        option = -1;
        menu(&option);
        analizeOption(option, inventory);
    }
    end();
    return 0;
}