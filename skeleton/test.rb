def transpose(arr)
    outer = []
    (0...arr.length).each do |i|
        inner = []
        arr.each do |subArr|
            inner << subArr[i]
        end
        outer << inner
    end
    outer
end

p transpose([["a","b","c"],
            [1,2,3],
            ["d","e","f"]])

            
            
class Array 
    def myEach(&prc) 
        i = 0 
        while i < arr.length  
            prc.call(arr[i]) 
            i += 1 
        end
        self
    end

    def myMap(&prc)

    end



end

arr.map {|ele| ele * 2} 

def each(&prc)
end

def map(&prc)
    # prc = {|ele| ele * 2}
    new_arr = [] 
    self.each { new_arr << prc.call(ele) }
    # prc = {new_arr << prc.call(ele) } 
    new_arr 
end

