# @param {Integer[][]} costs
# @return {Integer}

def two_city_sched_cost(costs)
  tmp = costs.map.with_index { |person, i| [person.first - person.last, i] }
  tmp = tmp.sort_by {|p| p.first }
  res = 0

  tmp.each_with_index do |p, idx|
    if  (idx < (tmp.length/2))
      res += (costs[p.last][0])
    else
      res += (costs[p.last][1])
    end
  end

  res
end
