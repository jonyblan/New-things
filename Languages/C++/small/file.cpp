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

    // constructer
    item() : name(""), quantity(0), price(0) {}
};

void start() {
    cout << "Welcome to the inventory manager." << endl;
}

void showItem(item data) {
    cout << "Name: " << data.name << ", Price: " << data.price << ", Quantity: " << data.quantity << endl;
}

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

string getStr(string msg) {
    string aux;
    while (aux == "") {
        cout << msg << endl;
        cin >> aux;
    }
    return aux;
}

int getPositive(string msg) {
    int aux = -1;
    while (!isPositive(aux)) {
        cout << msg << endl;
        cin >> aux;
    }
    return aux;
}

item* isThereItemName(vector<item>& inventory, string name) {
    for (vector<item>::iterator i = inventory.begin(); i != inventory.end(); i++) {
        if (name == i->name) {
            return &(*i);
        }
    }
    return nullptr;
}

bool ynToBool(string msg) { // the message has to inform that the answer must be y/n
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

item* searchItem(vector<item> inventory) {
    string name, aux;
    bool cont = true, rta;
    while (cont) {
        name = getStr("Please enter the item's name");
        item* itemRta = isThereItemName(inventory, name);
        if (itemRta == nullptr) {
            cout << "Item is not yet added" << endl;
            cont = ynToBool("Try another name? (y/n)");
        }
        else {
            return itemRta;
        }
    }
    return nullptr;
}

void searchForItem(vector<item>& inventory) {
    item* aux = searchItem(inventory); // Pass by reference
    if (aux != nullptr) {
        showItem(*aux);
    }
}

item askItem(vector<item> inventory) {
    bool equal = true;
    item aux = item();
    aux.name = getStr("Please enter the item's name");
    equal = (isThereItemName(inventory, aux.name) != nullptr); // if there is an item it wont return nullptr
    while (equal) {
        aux.name = getStr("Please enter a name that isn't in use");
        equal = (isThereItemName(inventory, aux.name) != nullptr); // if there is an item it wont return nullptr
        
    }
    aux.price = getPositive("What's the item's price?");
    aux.quantity = getPositive("How much inventory of that item is there?");
    return aux;
}

void addItem(vector<item>& inventory) {
    item aux = askItem(inventory);
    inventory.push_back(aux);
}

void updateItem(vector<item>& inventory) {
    item * aux = searchItem(inventory);
    int newPrice, newQuantity;
    if (aux == nullptr) {
        return;
    }
    showItem(*aux);
    newPrice = getPositive("Please enter the item's new price");
    newQuantity = getPositive("Please enter the item's new quantity");
    aux->price = newPrice;
    aux->quantity = newQuantity;
}

void sortByValue(vector<item>& inventory) { // made a bubble sort because more complex sorting algorithms will be looked upon in /proyects/smallC/organize
    bool organized = false;
    int i, j, size = inventory.size();
    for (i = 0; i < size-1 && !organized; i++) {
        organized = true;
        for (j = i; j < size - 1; j++) {
            if (inventory[j].price > inventory[j + 1].price) {
                organized = false;
                swap(inventory[j], inventory[j + 1]);
            }
        }
    }
    for (vector<item>::iterator i = inventory.begin(); i != inventory.end(); i++) {
        showItem(*i);
    }
}

void sortByName(vector<item>& inventory) { // made a bubble sort because more complex sorting algorithms will be looked upon in /proyects/smallC/organize
    bool organized = false;
    int i, j, size = inventory.size();
    for (i = 0; i < size - 1 && !organized; i++) {
        organized = true;
        for (j = i; j < size - 1; j++) {
            if (inventory[j].name > inventory[j + 1].name) {
                organized = false;
                swap(inventory[j], inventory[j + 1]);
            }
        }
    }
    for (vector<item>::iterator i = inventory.begin(); i != inventory.end(); i++) {
        showItem(*i);
    }
}

void totalValue(vector<item> inventory) {
    int i, size = inventory.size(), count = 0;
    for (i = 0; i < size; i++) {
        count += (inventory[i].price * inventory[i].quantity);
    }
    cout << "The total value of everything in the inventory is: $" << count << endl;
}

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