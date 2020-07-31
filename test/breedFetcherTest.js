const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string desc when a valid breed is entered, via callback', function(done) {
    this.timeout(30000)
    fetchBreedDescription('Sib', (err, desc) => {
      if (err) {
        console.log('Error fetch details: ', err);
      } else {
        console.log(desc);
      };
      assert.equal(err, null);
    
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. "
      assert.equal(expectedDesc, desc);
      done();
    }); 
  });

  it('should return \"Breed cannot be found\" when an invalid/non-existent breed is passed in', function(done) {
    this.timeout(30000)
    fetchBreedDescription('Gibberish', (err, desc) => {
      if (err) {
        console.log('Error fetch details: ', err);
      } else {
        console.log(desc);
      };
      const expectedDesc = "Breed cannot be found"
      assert.equal(expectedDesc, err);
      done();
    });
  });

});