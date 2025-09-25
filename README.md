# C++ Test Suite

This repository contains C++ test files for basic functionality testing.

## Files

- `test-1.cpp` - Basic C++ tests including arithmetic operations, string manipulations, and array operations
- `test-2.cpp` - Advanced C++ tests with STL containers, sorting algorithms, and class functionality
- `Makefile` - Build configuration for compiling and running the tests
- `tes.md` - Legacy markdown file (pre-existing)

## Building and Running

### Using Make (recommended)
```bash
# Compile all tests
make all

# Run all tests
make test

# Clean compiled files
make clean
```

### Manual compilation
```bash
# Compile test-1.cpp
g++ -std=c++17 -Wall -Wextra -o test1 test-1.cpp

# Compile test-2.cpp
g++ -std=c++17 -Wall -Wextra -o test2 test-2.cpp

# Run the tests
./test1
./test2
```

## Test Coverage

### test-1.cpp
- Basic arithmetic operations (addition, multiplication, division)
- String operations and concatenation
- Array operations and iteration

### test-2.cpp
- STL vector operations (push_back, pop_back, size)
- Sorting algorithms using std::sort
- Class functionality with a Calculator class
- Object-oriented programming concepts

## Requirements

- C++17 compatible compiler (g++ recommended)
- Make utility (optional, for using the Makefile)

## Expected Output

Both test suites should pass all tests and display success messages when run correctly.