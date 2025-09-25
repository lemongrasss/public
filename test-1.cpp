#include <iostream>
#include <cassert>
#include <string>

/**
 * test-1.cpp - Basic C++ test file
 * Contains fundamental test cases for basic operations
 */

// Test function declarations
bool test_basic_arithmetic();
bool test_string_operations();
bool test_array_operations();
void run_all_tests();

// Test implementations
bool test_basic_arithmetic() {
    std::cout << "Running test_basic_arithmetic..." << std::endl;
    
    // Test addition
    assert(2 + 3 == 5);
    assert(-1 + 1 == 0);
    
    // Test multiplication
    assert(4 * 5 == 20);
    assert(0 * 100 == 0);
    
    // Test division
    assert(10 / 2 == 5);
    assert(15 / 3 == 5);
    
    std::cout << "✓ Basic arithmetic tests passed" << std::endl;
    return true;
}

bool test_string_operations() {
    std::cout << "Running test_string_operations..." << std::endl;
    
    std::string str1 = "Hello";
    std::string str2 = "World";
    std::string combined = str1 + " " + str2;
    
    assert(combined == "Hello World");
    assert(str1.length() == 5);
    assert(str2.size() == 5);
    
    std::cout << "✓ String operations tests passed" << std::endl;
    return true;
}

bool test_array_operations() {
    std::cout << "Running test_array_operations..." << std::endl;
    
    int arr[] = {1, 2, 3, 4, 5};
    int sum = 0;
    
    for (int i = 0; i < 5; i++) {
        sum += arr[i];
    }
    
    assert(sum == 15);
    assert(arr[0] == 1);
    assert(arr[4] == 5);
    
    std::cout << "✓ Array operations tests passed" << std::endl;
    return true;
}

void run_all_tests() {
    std::cout << "=== Running Test Suite 1 ===" << std::endl;
    
    bool all_passed = true;
    all_passed &= test_basic_arithmetic();
    all_passed &= test_string_operations();
    all_passed &= test_array_operations();
    
    if (all_passed) {
        std::cout << "\n✅ All tests in test-1.cpp passed!" << std::endl;
    } else {
        std::cout << "\n❌ Some tests failed in test-1.cpp" << std::endl;
    }
}

int main() {
    run_all_tests();
    return 0;
}