# Playing with chocosolver

Simple stuff, really.

## Sudoku

Source: [Sudoku](src/main/java/Sudoku.java)

Solves sudoku

- Given a grid of 81 variables: some with a 1-digit domain, and others in the `1-9` domain
- Add constraints so rows are all different, columns are all different, 
and each of the 9 sub-squares on non different
- Solve it, and print it
