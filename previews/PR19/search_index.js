var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"CurrentModule = PokerHandEvaluator","category":"page"},{"location":"api/#Card","page":"API","title":"Card","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"hand_rank","category":"page"},{"location":"api/#PokerHandEvaluator.hand_rank","page":"API","title":"PokerHandEvaluator.hand_rank","text":"hand_rank(::Tuple{Card,Card,Card,Card,Card})\n\nThe hand rank (from 1:7462)\n\n(A♡,K♡,Q♡,J♡,10♡) -> 1\n...\n(7♡,5♢,4♣,3♠,2♡) -> 7462\n\nto compare poker hands (lower is better).\n\n\n\n\n\n","category":"function"},{"location":"#PokerHandEvaluator.jl","page":"Home","title":"PokerHandEvaluator.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A package for evaluating poker hands. PokerHandEvaluator.jl broadly uses the Cactus Kev approach (described in the next section) to evaluate hand ranks.","category":"page"},{"location":"#Cactus-Kev-approach","page":"Home","title":"Cactus Kev approach","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"There are combinations(52,5), or 2,598,960, unique 5-card hands. However, many of these hands have the exact same rank (e.g., (A♡,A♢,K♣,K♠,3♢) and (A♣,A♠,K♡,K♢,3♡)). There are 7462 unique hand ranks defined as","category":"page"},{"location":"","page":"Home","title":"Home","text":"A K Q J 10 royal straight flush: hand_rank = 1\nK Q J 10 9 straight flush: hand_rank = 2\n...\n7 5 4 3 2: hand_rank = 7462","category":"page"},{"location":"","page":"Home","title":"Home","text":"That's the gist of it. There's one more aspect to be addressed, and that is how to make the input arguments order-agnostic (to avoid sorting input arguments). To make the hand_rank order-agnostic, the card rank of each input can be mapped to prime numbers, and the product of these prime numbers are (1) unique (the product of unique primes is unique) and (2) order-agnostic (due to the multiplication commutative property). This mapped relationship can be implemented in various ways, for example via lookup tables, binary search etc.","category":"page"},{"location":"#PokerHandEvaluator.jl's-implementation","page":"Home","title":"PokerHandEvaluator.jl's implementation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"PokerHandEvaluator.jl uses PlayingCards.jl and defines hand_rank for a Tuple of 5 Cards. The hand_rank wrapper first uses (specialized) dispatch on flush vs off-suited hands which calls hand_rank_flush and hand_rank_offsuit. There are 1287 hand_rank_flush methods and 7462 - 1287 = 6175 hand_rank_offsuit methods. hand_rank_flush and hand_rank_offsuit methods are defined via Val for the mapped product of primes for the given card combination:","category":"page"},{"location":"","page":"Home","title":"Home","text":"hand_rank_offsuit(::Val{prod(prime.(cards))}) = N\nhand_rank_flush(::Val{prod(prime.(cards))}) = N","category":"page"},{"location":"","page":"Home","title":"Home","text":"PokerHandEvaluator.jl simply loops over the combinations of hands (using Combinatorics.jl) and eval-ing the methods into the module to return the value directly:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using BenchmarkTools, InteractiveUtils\nusing PlayingCards, PokerHandEvaluator\n@code_typed hand_rank((A♡, A♣, A♠, 3♡, 2♢))","category":"page"},{"location":"","page":"Home","title":"Home","text":"@btime hand_rank($(A♡, A♣, A♠, 3♡, 2♢))\nnothing","category":"page"},{"location":"","page":"Home","title":"Home","text":"Doing this is a bit expensive for the compiler as there are many method definitions. This timing may not be representative of what users should expect, however, running PokerHandEvaluator.jl's perf.jl file shows that performance is around 2 μs:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> include(\"perf.jl\")\n[ Info: Precompiling PokerHandEvaluator [18ed25b1-892a-4a3b-b8fc-1036dc9a6a89]\nΔt_per_hand_eval = 1.3032391999999999e-5\n\njulia> include(\"perf.jl\")\nΔt_per_hand_eval = 1.6626089999999998e-6","category":"page"},{"location":"","page":"Home","title":"Home","text":"This file is configured to evaluate roughly 4% of all possible hands, but can easily be adjusted.","category":"page"}]
}
