# problem-solving-algorithms
Informed research techniques, Constraint Programming and SAT Problems

## Overview

This repository contains implementations of problem-solving algorithms for various combinatorial problems. The project focuses on informed research techniques, Constraint Programming, and SAT Problems. Below is a brief description of the three main folders in this repository:

Follow the instructions below to get started with each problem:

### N Queens Problem (JavaScript)

1. Navigate to the [NQueens directory](./NQueens).
2. Implement the A* algorithm according to the specified requirements.
3. Propose and implement an "admissible" heuristic for optimization.

### SAT Problem (Generic)

1. Go to the [SATProblem directory](./SATProblem).
2. Implement a solver for the SAT problem using the provided formula.

### Sudoku Solver (Java)

1. Head to the [Sudoku directory](./Sudoku-CP).
2. Implement the Sudoku solver using Constraint Programming techniques in Java.

## Usage

1. Clone this repository:

    ```bash
    git clone https://github.com/lorentsinani/problem-solving-algorithms.git
    ```

2. Navigate to the project directory:

    ```bash
    cd problem-solving-algorithms
    ```

3. Since in this repo we have 2 problems only that are solved based on code we have to get into their directory and have environment of their language installed as prerequisites:
    For [NQueens](./NQueens) we need to have [Latest LTS Node version](https://nodejs.org/en/download) then go to the directory:
    ```bash
    cd ./NQueens/
    ```
    then run the `NQueens.js` file via node:
    ```bash
    node NQueens.js
    ```
    For [Sudoku-CP](./NQueens) we need to have [Java 17+](https://www.oracle.com/java/technologies/downloads/) then go to the directory:
    ```bash
    cd ./Sudoku-CP/
    ```
    then run the `Sudoku.java` file which is under `./src/main/java/` via the IDE you use i.e IntelliJ. To have the output in ASCII Table you need to install `gradle` which will be required as soon as you open project in IDE(used `gradle-7.2`).

4. The project will displayed in `jupyter` localhost where you can run cells and check results.


## Contributing

Feel free to contribute by creating pull requests for improvements, bug fixes, or additional features.

## License

This project is licensed under the [MIT License](LICENSE).

## Authors

[Albin Bajrami](https://github.com/Albiinn)

[Andi Hyseni](https://github.com/Andi6H)

[Lorent Sinani](https://github.com/lorentsinani)
