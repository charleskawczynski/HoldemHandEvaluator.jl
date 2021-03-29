using Test
using HoldemHandEvaluator
using HoldemCards
using BenchmarkTools

#####
##### Helpers
#####

@testset "Helpers" begin
    include("test_card_eval_helpers.jl")
end

#####
##### Straight flush
#####

@testset "Straight flush (Ranks 1:10)" begin
    include("test_straight_flush.jl")
    @btime hand_rank($(A♣,5♣,4♣,3♣,2♣)) # 0.001 ns ?! 🚀
end

#####
##### Quads
#####

@testset "Test quads (Ranks 11:166)" begin
    include("test_quads.jl")
    @btime hand_rank($(2♣, 2♡, 2♢, 3♠, 3♠))
end

@testset "Test Full house (Ranks 167:322)" begin
    include("test_full_house.jl")
    @btime hand_rank($(2♣, 2♡, 2♢, 3♠, 3♣))
end

#####
##### Flush
#####

@testset "Test flush (Ranks 323:1599)" begin
    include("test_flush.jl")
    @btime hand_rank($(Q♣, J♣, 10♣, 5♣, 2♣))
end

#####
##### Off-suit straight
#####

@testset "Test off-suit straight (Ranks 1600:1609)" begin
    include("test_offsuit_straight.jl")
    @btime hand_rank($(5♣, 4♡, 3♢, 2♠, A♢))
end

#####
##### Trips
#####

@testset "Test trips (Ranks 1610:2467)" begin
    include("test_trips.jl")
    @btime hand_rank($(A♣, A♡, A♡, 10♣, 3♢))
end

#####
##### Two-pair
#####

@testset "Test two-pair (Ranks 2468:3325)" begin
    include("test_two_pair.jl")
    @btime hand_rank($(A♣, A♡, J♡, J♣, 3♢))
end

#####
##### Pair
#####

@testset "Test pair (Ranks 3326:6185)" begin
    include("test_pair.jl")
    @btime hand_rank($(5♣, 5♡, A♢, 3♢, 2♠))
    # @btime hand_rank($(A♢, 5♣, 5♡, 3♢, 2♠)) # SO
end

#####
##### High card
#####

@testset "Test high card (Ranks 6186:7462)" begin
    include("test_high_card.jl")
    @btime hand_rank($(A♣, J♢, 5♡, 3♢, 2♠))
end

