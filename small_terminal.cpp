#include <iostream>
#include <string>

void show(){
    std::cout<<"\nEnter command:\n";
}

int main(){
    bool status = true;
    std::string str;
    char a[50];
    while (status){
        show();
        getline(std::cin, str);
        str.copy(a, -1, 0);
        if (a[0] == 'q'){
            break;
        }
        else{
            std::cout<<"\ncommand not found\n";
        }
    }

    return 0;
}