var DEFAULT_CAPACITY = 2;

function Airport(){

  this.planes = [];
  this.capacity = DEFAULT_CAPACITY;
};

Airport.prototype.land = function(plane){
  if (this.planes.length >= this.capacity){
    throw "Airport Full!"
  } else if (this.planes.includes(plane)){
    throw "Plane already docked"
  } else {
    plane.land();
    this.planes.push(plane);
  };
};


Airport.prototype.release = function(plane){
  plane.takeOff();
  this.planes = this.planes.filter(function(p) {
    return p !== plane
  });

};
