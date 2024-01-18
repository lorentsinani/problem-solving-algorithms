
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
\[ F = igwedge_{i=1}^{100} \left[ (Xi1 ee Xi2 ee \ldots ee Xi10) \wedge igwedge_{1 \leq j < k \leq 10} (
eg Xij ee 
eg Xik) ight] \wedge igwedge_{	ext{forbidden pairs}} igwedge_{j=1}^{10} (
eg Xij ee 
eg Xkj) \wedge igwedge_{	ext{required pairs}} igwedge_{j=1}^{10} ((
eg Xij ee Xkj) \wedge (
eg Xkj ee Xij)) \]

This formula represents the conjunction of all the individual clauses necessary to satisfy the seating arrangement constraints.
