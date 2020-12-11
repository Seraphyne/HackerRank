# Ruby Tutorial - Object Methods
def odd_or_even(number)
  number.even?
end


# Ruby Hash - Addition, Deletion, Selection
hackerrank.select! { |k, v| k.is_a? Integer }
hackerrank.select! { |k, v| v.odd? }
hackerrank[543121] = 100

# Ruby Control Structures - Each
def scoring(array)
    array.each do |user|
    user.update_score
    end
end

# Ruby Control Structures - Unless
def scoring(array)
    array.each { |user| user.update_score unless user.is_admin? }
end

# Ruby Control Structures - Until
while not coder.oh_one?
    coder.practice
end

# Ruby Control Structures - Case (Bonus Question)
def identify_class(obj)
       case obj
    when Hacker,Submission,TestCase,Contest
        puts "It's a #{obj.class}!"
    else
        puts "It's an unknown model"
    end
end