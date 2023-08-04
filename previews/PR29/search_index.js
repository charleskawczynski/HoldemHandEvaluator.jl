var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"CurrentModule = PokerHandEvaluator","category":"page"},{"location":"api/#Internal-evaluate-methods","page":"API","title":"Internal evaluate methods","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"evaluate5\nevaluate","category":"page"},{"location":"api/#PokerHandEvaluator.evaluate5","page":"API","title":"PokerHandEvaluator.evaluate5","text":"evaluate5(cards::Card...)\nevaluate5(::Card,::Card,::Card,::Card,::Card)\nevaluate5(::Tuple{Card,Card,Card,Card,Card})\n\nThis is PokerHandEvaluator.jl's core method.\n\nReturns a tuple with\n\nrank the rank (from 1:7462):\n(A♡,K♡,Q♡,J♡,10♡) -> 1  ...  (7♡,5♢,4♣,3♠,2♡) -> 7462\nhand the top hand type (AbstractHandType)\n\nfor 5-card hands only.\n\n\n\n\n\n","category":"function"},{"location":"api/#PokerHandEvaluator.evaluate","page":"API","title":"PokerHandEvaluator.evaluate","text":"evaluate(cards::Card...)\nevaluate(::Card,::Card,::Card,::Card,::Card[,::Card,::Card])\nevaluate(::Tuple{Card,Card,Card,Card,Card[,Card,Card]})\n\nEvaluates 5, 6, and 7-card hands using evaluate5. This is done by using Combinatorics.combinations to evaluate all possible 5, 6, and 7-card hand combinations.\n\n\n\n\n\n","category":"function"},{"location":"api/#Exported-types/methods","page":"API","title":"Exported types/methods","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"HandTypes\nAbstractHandType\nCompactHandEval\nFullHandEval\nhand_type\nhand_rank\nbest_cards\nall_cards","category":"page"},{"location":"api/#PokerHandEvaluator.HandTypes","page":"API","title":"PokerHandEvaluator.HandTypes","text":"HandTypes\n\nDefines hand types:\n\nStraightFlush\nQuads\nFullHouse\nFlush\nStraight\nTrips\nTwoPair\nOnePair\nHighCard\n\n\n\n\n\n","category":"module"},{"location":"api/#PokerHandEvaluator.HandTypes.AbstractHandType","page":"API","title":"PokerHandEvaluator.HandTypes.AbstractHandType","text":"AbstractHandType\n\nSubtypes used for hands, such as Quads, Flush, and TwoPair.\n\n\n\n\n\n","category":"type"},{"location":"api/#PokerHandEvaluator.CompactHandEval","page":"API","title":"PokerHandEvaluator.CompactHandEval","text":"CompactHandEval(cards::Card...)\nCompactHandEval(::Card,::Card,::Card,::Card,::Card[,::Card,::Card])\nCompactHandEval(::Tuple{Card,Card,Card,Card,Card[,::Card,::Card]})\n\nA compact hand evaluation, with supporting methods: hand_rank, hand_type.\n\nExamples\n\nusing PlayingCards\nusing PokerHandEvaluator\nusing PokerHandEvaluator.HandTypes\ntable_cards = (J♡,J♣,A♣,A♢);\nplayer_cards = (\n  (A♠,2♠,table_cards...),\n  (J♠,J♣,table_cards...),\n);\nche = CompactHandEval.(player_cards);\nwinner_id = argmin(hand_rank.(che)) # = 2\nwinning_hand = hand_type(che[winner_id]) # = Quads()\n\n\n\n\n\n","category":"type"},{"location":"api/#PokerHandEvaluator.FullHandEval","page":"API","title":"PokerHandEvaluator.FullHandEval","text":"FullHandEval(cards::Card...)\nFullHandEval(::Card,::Card,::Card,::Card,::Card[,::Card,::Card])\nFullHandEval(::Tuple{Card,Card,Card,Card,Card[,::Card,::Card]})\n\nA compact hand evaluation, with supporting methods: hand_rank, hand_type, best_cards, all_cards.\n\nExamples\n\nusing PlayingCards, PokerHandEvaluator\ntable_cards = (J♡,J♣,2♣,3♢,5♣)\nplayer_cards = (\n  (A♠,2♠,table_cards...),\n  (J♠,T♣,table_cards...),\n);\nfhe = FullHandEval.(player_cards);\nwinner_id = argmin(hand_rank.(fhe)) # = 2\nwinning_hand = hand_type(fhe[winner_id]) # = Trips()\nwinning_rank = hand_rank(fhe[winner_id]) # = 1842\nwinning_cards = best_cards(fhe[winner_id]) # = (J♠, T♣, J♡, J♣, 5♣)\nallcards = all_cards(fhe[winner_id]) # = (J♠, T♣, J♡, J♣, 2♣, 3♢, 5♣)\n\n\n\n\n\n","category":"type"},{"location":"api/#PokerHandEvaluator.hand_type","page":"API","title":"PokerHandEvaluator.hand_type","text":"hand_type(::AbstractHandEvaluation)\n\nThe hand type, a sub-type of AbstractHandType.\n\n\n\n\n\n","category":"function"},{"location":"api/#PokerHandEvaluator.hand_rank","page":"API","title":"PokerHandEvaluator.hand_rank","text":"hand_rank(::AbstractHandEvaluation)\n\nThe hand rank, between 1 (straight royal flush) and 7462 (7 high with lowest kickers):\n\n(A♡,K♡,Q♡,J♡,10♡) -> 1\n...\n(7♡,5♢,4♣,3♠,2♡) -> 7462\n\n\n\n\n\n","category":"function"},{"location":"api/#PokerHandEvaluator.best_cards","page":"API","title":"PokerHandEvaluator.best_cards","text":"best_cards(::FullHandEval)\n\nThe set of cards with the lowest (best) rank.\n\n\n\n\n\n","category":"function"},{"location":"api/#PokerHandEvaluator.all_cards","page":"API","title":"PokerHandEvaluator.all_cards","text":"all_cards(::FullHandEval)\n\nAll of the input cards to FullHandEval.\n\n\n\n\n\n","category":"function"},{"location":"#PokerHandEvaluator.jl","page":"Home","title":"PokerHandEvaluator.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = PokerHandEvaluator","category":"page"},{"location":"","page":"Home","title":"Home","text":"A package for evaluating poker hands.","category":"page"},{"location":"#Functionality","page":"Home","title":"Functionality","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"PokerHandEvaluator.jl can be used to determine which player wins in a game of poker. PokerHandEvaluator.jl exports two types:","category":"page"},{"location":"","page":"Home","title":"Home","text":"CompactHandEval: a compact hand evaluation with limited properties and getter-methods defined:\nhand_rank\nhand_type\nFullHandEval: a comprehensive hand evaluation with more properties and additional methods defined:\nhand_rank\nhand_type\nbest_cards\nall_cards","category":"page"},{"location":"#Example","page":"Home","title":"Example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using PlayingCards, PokerHandEvaluator\ntable_cards = (J♡,J♣,2♣,3♢,5♣)\nplayer_cards = (\n  (A♠,2♠,table_cards...),\n  (J♠,T♣,table_cards...),\n);\nfhe = FullHandEval.(player_cards);\n\n# the hand with the lowest rank is the winner (and equal ranks tie)\n@show winner_id = argmin(hand_rank.(fhe))\n\n@show winning_hand = hand_type(fhe[winner_id])\n@show winning_rank = hand_rank(fhe[winner_id])\n@show winning_cards = best_cards(fhe[winner_id])\n@show allcards = all_cards(fhe[winner_id])\nnothing","category":"page"},{"location":"implementation/#Implementation","page":"Implementation","title":"Implementation","text":"","category":"section"},{"location":"implementation/","page":"Implementation","title":"Implementation","text":"CurrentModule = PokerHandEvaluator","category":"page"},{"location":"implementation/","page":"Implementation","title":"Implementation","text":"PokerHandEvaluator.jl's approach follows Cactus Kev, however, our implementation, described below, is different.","category":"page"},{"location":"implementation/","page":"Implementation","title":"Implementation","text":"There are combinations(52,5), or 2,598,960, unique 5-card hands. However, many of these hands have the exact same rank (e.g., (A♡,A♢,K♣,K♠,3♢) and (A♡,A♢,K♣,K♠,3♡)). There are only 7462 unique hand ranks:","category":"page"},{"location":"implementation/","page":"Implementation","title":"Implementation","text":"A K Q J 10 royal straight flush: rank = 1\nK Q J 10 9 straight flush: rank = 2\n...\n7 5 4 3 2: rank = 7462","category":"page"},{"location":"implementation/","page":"Implementation","title":"Implementation","text":"PokerHandEvaluator.jl's core method, evaluate5, returns this rank (and the AbstractHandType) so that any two hands can be compared to determine the winner. There's one more wrinkle to flatten. Exposing an interface that is order-agnostic (so that users don't need to sort the cards before evaluation) is important for performance. To make the evaluate5 order-agnostic, the card rank of each input is mapped to prime numbers:","category":"page"},{"location":"implementation/","page":"Implementation","title":"Implementation","text":"const primes = (41,2,3,5,7,11,13,17,19,23,29,31,37)\nprime(card::Card) = primes[rank(card)]","category":"page"},{"location":"implementation/","page":"Implementation","title":"Implementation","text":"The product of prime numbers are (1) unique and (2) order-agnostic (due to the multiplication commutative property). This mapped relationship can be implemented in various ways, for example via lookup tables, binary search etc.. PokerHandEvaluator.jl simply loops over the combinations of hands (using Combinatorics.jl) and evals the methods (by dispatching on types ::Val{prod(primes.(cards))}) to return the rank directly.","category":"page"},{"location":"implementation/","page":"Implementation","title":"Implementation","text":"Finally, PokerHandEvaluator.jl specializes on PlayingCards.jl's suit type parameter to disambiguate flush vs off-suited hands:","category":"page"},{"location":"implementation/","page":"Implementation","title":"Implementation","text":"evaluate5(t::Tuple{Card{S1},Card{S2},Card{S3},Card{S4},Card{S5}}) where {S1,S2,S3,S4,S5} =\n    evaluate5_offsuit(Val(prod(prime.(t))))\n\nevaluate5(t::Tuple{Card{S},Card{S},Card{S},Card{S},Card{S}}) where {S} =\n    evaluate5_flush(Val(prod(prime.(t))))","category":"page"},{"location":"implementation/","page":"Implementation","title":"Implementation","text":"This approach has performance / compile-time implications. See the performance documentation for more information.","category":"page"},{"location":"perf/#Performance","page":"Performance","title":"Performance","text":"","category":"section"},{"location":"perf/","page":"Performance","title":"Performance","text":"CurrentModule = PokerHandEvaluator","category":"page"},{"location":"perf/","page":"Performance","title":"Performance","text":"There is a perf.jl file at the top level of the repo which roughly estimates PokerHandEvaluator.jl's performance. Here is a snapshot example of using BenchmarkTools on PokerHandEvaluator.jl's base evaluation method evaluate5:","category":"page"},{"location":"perf/","page":"Performance","title":"Performance","text":"using BenchmarkTools, InteractiveUtils\nusing PlayingCards, PokerHandEvaluator\n@code_typed PokerHandEvaluator.evaluate5((A♡, A♣, A♠, 3♡, 2♢))","category":"page"},{"location":"perf/","page":"Performance","title":"Performance","text":"@btime PokerHandEvaluator.evaluate5($(A♡, A♣, A♠, 3♡, 2♢))\nnothing","category":"page"},{"location":"perf/","page":"Performance","title":"Performance","text":"evaling methods for all unique hands is a bit expensive for the compiler as there are many method definitions. This timing may not be representative of what users should expect, however. Running PokerHandEvaluator.jl's perf.jl file shows that performance is around 2 μs:","category":"page"},{"location":"perf/","page":"Performance","title":"Performance","text":"using PokerHandEvaluator\nphe_dir = dirname(dirname(pathof(PokerHandEvaluator)))\ninclude(joinpath(phe_dir, \"perf.jl\")) # compile first\ninclude(joinpath(phe_dir, \"perf.jl\"))","category":"page"},{"location":"perf/","page":"Performance","title":"Performance","text":"perf.jl is configured to evaluate roughly 4% of all possible hands, but this can easily be adjusted.","category":"page"}]
}
