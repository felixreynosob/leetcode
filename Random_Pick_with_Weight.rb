class Solution

    def initialize(w)
        @w = w
        @proportions = nil
    end


    def pick_index()
        return @w.index(@w.sample) if @w.length > 5000
        r = rand * 100
        acc = 0

        unless @proportions
          @proportions = (@w.map.with_index {|int, i| [(int/@w.sum.to_f) * 100, i] })
          @proportions.sort_by! {|proportion| proportion.first }
        end

        (0...@proportions.length).each do |i|
          return @proportions[i][1] if (acc...(@proportions[i][0]+acc)).include?(r)
          acc += @proportions[i][0]
        end
    end
    
end
