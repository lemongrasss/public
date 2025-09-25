# Makefile for C++ test files
CXX = g++
CXXFLAGS = -std=c++17 -Wall -Wextra -O2

# Target executables
TARGETS = test1 test2

# Default target
all: $(TARGETS)

# Build test-1
test1: test-1.cpp
	$(CXX) $(CXXFLAGS) -o $@ $<

# Build test-2
test2: test-2.cpp
	$(CXX) $(CXXFLAGS) -o $@ $<

# Run all tests
test: all
	@echo "Running test-1.cpp:"
	@./test1
	@echo ""
	@echo "Running test-2.cpp:"
	@./test2

# Clean compiled files
clean:
	rm -f $(TARGETS)

.PHONY: all test clean