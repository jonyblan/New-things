#include <iostream>
#include <vector>
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

void menu(int * option) {
    cout << *option << endl << endl;
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

item askItem() {
    item aux = item();
    aux.name = getStr("Please enter the item's name");
    aux.price = getPositive("What's the item's price?");
    aux.quantity = getPositive("How much inventory of that item is there?");
    return aux;
}

void addItem(vector<item>& inventory) {
    item aux = askItem();
    inventory.push_back(aux);
}

void showItem(item data) {
    cout << "Name: " << data.name << ", Price: " << data.price << ", Quantity: " << data.quantity << endl;
}

item* searchItem(vector<item> inventory) {
    string rta = getStr("Please enter the item's name");
    item a;
    for (vector<item>::iterator i = inventory.begin(); i != inventory.end(); i++) {
        if (rta == i->name) {
            showItem(*i);
            return &(*i);
        }
    }
    cout << "Item is not yet added";
    return nullptr;
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

void sortByValue(vector<item>& inventory) {
    for (const item& i : inventory) {
        cout << "Name: " << i.name << ", Quantity: " << i.quantity << ", Price: " << i.price << endl;
    }
}

void sortByName(vector<item>& inventory) {

}

void totalValue(vector<item> inventory) {

}

void analizeOption(int option, vector<item>& inventory) {
    switch (option){
    case 0:
        break;
    case 1:
        addItem(inventory);
        break;
    case 2:
        searchItem(inventory);
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