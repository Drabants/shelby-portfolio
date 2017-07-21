function Branch(begin, end, weight){
    this.begin = begin;
    this.end = end;
    this.finished = false;
    this.weight = weight;
    this.show = function(){
        stroke(255);
        strokeWeight(20/this.weight);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }
    
    //creates two additional branches
    this.branchA = function() {
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(PI/13);
        dir.mult(0.67);
        var newEnd =p5.Vector.add(this.end, dir);
        var right = new Branch(this.end, newEnd, this.weight*2);
        return right;
    }
    this.branchB = function() {
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-PI/4);
        dir.mult(0.67);
        var newEnd =p5.Vector.add(this.end, dir);
        var left = new Branch(this.end, newEnd,this.weight*2);
        return left;
    }
}
