describe('FizzBuzzWoof', function(){
  it('will return number for nonmultiples', function() {
  	var result = fizzBuzz(1);
  	expect(result).toBe(1);
  });
  it('will return fizz for multiples of 3', function () {
    var result = fizzBuzz(3);
    expect(result).toBe("fizz");
  });
  it('will return fizz for multiples of 5', function () {
    var result = fizzBuzz(5);
    expect(result).toBe("buzz");
  }); 
  it('will return fizz for multiples of 7', function () {
    var result = fizzBuzz(7);
    expect(result).toBe("woof");
  });
  it('will return fizz buzz woof for multiples of 3, 5, and 7', function () {
    var result = fizzBuzz(105);
    expect(result).toBe("fizzbuzzwoof");
  });
  it('will return fizz buzz for multiples of 3 and 5', function () {
    var result = fizzBuzz(15);
    expect(result).toBe("fizzbuzz");
  });
  it('will return fizz woof for multiples of 3 and 7', function () {
    var result = fizzBuzz(21);
    expect(result).toBe("fizzwoof");
  });
  it('will return buzz woof for multiples of 5 and 7', function () {
    var result = fizzBuzz(70);
    expect(result).toBe("buzzwoof");
  });  
});

