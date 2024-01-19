# Guest Seating SAT Problem

## Problem Description
At an event, 100 guests have been invited. They need to be seated at 10 tables, each with 10 chairs. There are certain conditions for placing guests at the tables:
- Some guests cannot sit at the same table.
- Some guests must sit at the same table.
The goal is to arrange the guests at the tables in a way that satisfies these conditions.

## SAT Formula
To solve this problem, we define a SAT (Satisfiability) formula with the following elements:

### Boolean Variables
- `Xij` represents whether guest `Gi` is seated at table `Tj`.

### Constraints
1. **Each Guest at One Table**:
   - At least one table: `(Xi1 ∨ Xi2 ∨ ... ∨ Xi10)` for each `i`.
   - At most one table: `(¬Xij ∨ ¬Xik)` for each `i` and each pair `j, k` where `j ≠ k`.

2. **Pairs Who Cannot Sit Together**:
   - `(¬Xij ∨ ¬Xkj)` for each forbidden pair `(Gi, Gk)` and each table `Tj`.

3. **Pairs Who Must Sit Together**:
   - `(¬Xij ∨ Xkj) ∧ (¬Xkj ∨ Xij)` for each required pair `(Gi, Gk)` and each table `Tj`.

### Final SAT Formula
![Screenshot 2024-01-18 at 5 28 43 PM](https://github.com/lorentsinani/problem-solving-algorithms/assets/56487491/ef0b58d8-e630-4e11-b649-9772dbce9e74)

This formula represents the conjunction of all the individual clauses necessary to satisfy the seating arrangement constraints.

