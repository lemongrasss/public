#include <iostream>
#include <cassert>
#include <vector>
#include <algorithm>

/**
 * test-2.cpp - Advanced C++ test file
 * Contains more complex test cases using STL containers and algorithms
 */

// Test function declarations
bool test_vector_operations();
bool test_sorting_algorithms();
bool test_class_functionality();
void run_all_tests();

// Simple test class
class Calculator {
private:
    double value;
    
public:
    Calculator(double initial = 0.0) : value(initial) {}
    
    void add(double x) { value += x; }
    void subtract(double x) { value -= x; }
    void multiply(double x) { value *= x; }
    void divide(double x) { 
        if (x != 0) value /= x; 
    }
    
    double getValue() const { return value; }
    void reset() { value = 0.0; }
};

// Test implementations
bool test_vector_operations() {
    std::cout << "Running test_vector_operations..." << std::endl;
    
    std::vector<int> vec = {10, 20, 30, 40, 50};
    
    assert(vec.size() == 5);
    assert(vec[0] == 10);
    assert(vec.back() == 50);
    
    vec.push_back(60);
    assert(vec.size() == 6);
    assert(vec.back() == 60);
    
    vec.pop_back();
    assert(vec.size() == 5);
    assert(vec.back() == 50);
    
    std::cout << "✓ Vector operations tests passed" << std::endl;
    return true;
}

bool test_sorting_algorithms() {
    std::cout << "Running test_sorting_algorithms..." << std::endl;
    
    std::vector<int> numbers = {5, 2, 8, 1, 9, 3};
    std::vector<int> expected = {1, 2, 3, 5, 8, 9};
    
    std::sort(numbers.begin(), numbers.end());
    
    assert(numbers == expected);
    assert(numbers.size() == 6);
    assert(numbers[0] == 1);
    assert(numbers[5] == 9);
    
    std::cout << "✓ Sorting algorithms tests passed" << std::endl;
    return true;
}

bool test_class_functionality() {
    std::cout << "Running test_class_functionality..." << std::endl;
    
    Calculator calc(10.0);
    
    assert(calc.getValue() == 10.0);
    
    calc.add(5.0);
    assert(calc.getValue() == 15.0);
    
    calc.subtract(3.0);
    assert(calc.getValue() == 12.0);
    
    calc.multiply(2.0);
    assert(calc.getValue() == 24.0);
    
    calc.divide(4.0);
    assert(calc.getValue() == 6.0);
    
    calc.reset();
    assert(calc.getValue() == 0.0);
    
    std::cout << "✓ Class functionality tests passed" << std::endl;
    return true;
}

void run_all_tests() {
    std::cout << "=== Running Test Suite 2 ===" << std::endl;
    
    bool all_passed = true;
    all_passed &= test_vector_operations();
    all_passed &= test_sorting_algorithms();
    all_passed &= test_class_functionality();
    
    if (all_passed) {
        std::cout << "\n✅ All tests in test-2.cpp passed!" << std::endl;
    } else {
        std::cout << "\n❌ Some tests failed in test-2.cpp" << std::endl;
    }
}

int main() {
    run_all_tests();
    return 0;
}