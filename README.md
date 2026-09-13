# DSA Prep

Daily DSA practice, organized by pattern. Working toward Backend Engineer roles — building this alongside interview prep. System design notes added as I go.

## Progress

| # | Problem | Pattern | Difficulty | Date |
|---|---------|---------|------------|------|
| 1 | [Two Sum](hashmap/two-sum.js) | Hashmap | Easy | 2026-08 |
| 2 | [Contains Duplicate](hashmap/contains-duplicate.js) | Hashmap | Easy | 2026-08 |
| 3 | [Group Anagrams](hashmap/group-anagrams.js) | Hashmap | Medium | 2026-08 |
| 4 | [Top K Frequent Elements](hashmap/top-k-frequent-elements.js) | Hashmap | Medium | 2026-08 |
| 5 | [Valid Palindrome](two-pointers/valid-palindrome.js) | Two Pointers | Easy | 2026-08 |
| 6 | [Two Sum II](two-pointers/two-sum-ii.js) | Two Pointers | Medium | 2026-08 |
| 7 | [Sort an Array (Quicksort)](array/quicksort.js) | Arrays / Divide & Conquer | Medium | 2026-08 |
| 8 | [Flatten Array](array/flatten-array.js) | Arrays / Stack | Medium | 2026-08 |
| 9 | [Find/Remove Duplicates](array/find-remove-duplicates.js) | Hashmap / Arrays | Easy | 2026-08 |
| 10 | [Container With Most Water](two-pointers/container-with-most-water.js) | Two Pointers (converging) | Medium | 2026-08 |
| 11 | [Move Zeroes](two-pointers/move-zeroes.js) | Two Pointers (fast/slow) | Easy | 2026-08 |
| 12 | [Remove Duplicates from Sorted Array](two-pointers/remove-duplicates-sorted-array.js) | Two Pointers (fast/slow) | Easy | 2026-08 |
| 13 | [Reverse a String](strings/reverse-string.js) | Two Pointers (converging) | Easy | 2026-09 |
| 14 | [First Unique Character in a String](strings/first-unique-character.js) | Hashmap | Easy | 2026-09 |
| 15 | [Valid Parentheses](stack/valid-parentheses.js) | Stack | Easy | 2026-09 |
| 16 | [Min Stack](stack/min-stack.js) | Stack (design/class) | Medium | 2026-09 |
| 17 | [Daily Temperatures](stack/daily-temperatures.js) | Stack (monotonic) | Medium | 2026-09 |
| 18 | [Best Time to Buy and Sell Stock](sliding-window/best-time-to-buy-sell-stock.js) | Sliding Window / single-pass | Easy | 2026-09 |
| 19 | [Maximum Sum Subarray of Size K](sliding-window/max-sum-subarray-size-k.js) | Sliding Window (fixed-size) | Easy | 2026-09 |
| 20 | [Longest Substring Without Repeating Characters](sliding-window/longest-substring-without-repeating.js) | Sliding Window (variable-size) | Medium | 2026-09 |
| 21 | [Longest Substring with At Most K Distinct Characters](sliding-window/longest-substring-k-distinct.js) | Sliding Window (variable-size, Map-based) | Medium | 2026-09 |

## Patterns covered so far

- **Hashmap** — O(1) lookups trading space for time. Frequency counting, seen-value tracking, complement checks.
- **Two Pointers (converging)** — opposite ends closing inward, for pair-sum, palindrome, and max-area checks.
- **Two Pointers (same-direction fast/slow)** — in-place compaction/filtering; slow marks the next write position, fast scans ahead.
- **Arrays** — sorting (quicksort), stack-based traversal (flatten), duplicate detection/removal.
- **Stack** — LIFO matching (valid parentheses), auxiliary min-tracking stack (min stack), monotonic stack for next-greater-style problems (daily temperatures).
- **Sliding Window (fixed-size)** — window sum maintained incrementally by dropping the trailing element and adding the leading one.
- **Sliding Window (variable-size)** — left/right pointers expand/contract a window based on a constraint (no repeats, at most k distinct chars).
