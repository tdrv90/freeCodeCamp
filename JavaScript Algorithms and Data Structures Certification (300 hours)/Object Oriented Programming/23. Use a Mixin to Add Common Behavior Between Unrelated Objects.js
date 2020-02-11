/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-mixin-to-add-common-behavior-between-unrelated-objects


Create a mixin named glideMixin that defines a method named glide.
Then use the glideMixin to give both bird and boat the ability to glide.

(1) Your code should declare a glideMixin variable that is a function.
(2) Your code should use the glideMixin on the bird object to give
    it the glide method.
(3) Your code should use the glideMixin on the boat object to give
    it the glide method.
*/

let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Add your code below this line

let glideMixin = (obj) => {
    obj.glide = () => {
        console.log('swoosh');
    }
}

glideMixin(bird);
glideMixin(boat);
bird.glide();
boat.glide();