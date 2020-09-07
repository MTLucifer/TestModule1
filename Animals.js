function Animal(name, weight) {
        this.name = name;
        this.weight = weight;

    this.setName = function (name2){
        this.name = name2;
    }
    this.setWeight = function (weight2){
        this.weight = weight2;
    }
    this.getName = function (){
        return this.name;
    }
    this.getWeight = function (){
        return this.weight
    }
    this.toString = function (){
        return "Tên: " + this.name + "<br>" + "Cân nặng: " + this.weight;
    }
}
