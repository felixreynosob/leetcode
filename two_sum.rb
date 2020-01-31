def two_sum(nums, target) 
    hsh = Hash.new
    
    nums.each_with_index do |el, idx|
        if !hsh.has_key?(el)
            hsh[el] = Array.new 
            hsh[el] << idx
        else
            hsh[el] << idx
        end
        
    end
    
    hsh.each do |key, arr|
        nbr = target - key
        
        if nbr == key 
            if hsh[key].length > 1
                
                return [hsh[key].first, hsh[key].drop(1).first]
            else
                next
            end
        end
        
        if hsh.has_key?(nbr)
            return [hsh[key].first, hsh[nbr].first]
        end
    end

    nil
end