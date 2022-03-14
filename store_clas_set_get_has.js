class Store {
	constructor() {
  	this.keys = [];
    this.values = [];
  }
  
  set(node, value) {
  	let index = this.keys.indexOf(node);
    
    if (index === -1) {
    	index = this.keys.push(node) - 1;
    }
    
    this.values[index] = value;
  }
  
  get(node) {
  	return this.values[this.keys.indexOf(node)];
  }
  
  has(node) {
  	return this.keys.indexOf(node) !== -1;
  }
  
  add(node, value) {
		if (this.has(node)) {
    	this.set(node, this.get(node) + value);
    } else {
    	this.set(node, value);
    }
  }
  
  remove(node) {
  	const index = this.keys.indexOf(node);
    
    if (index !== -1) {
    	this.keys.splice(index, 1);
      this.values.splice(index, 1);
    }
  }
  
  size() {
  	return this.keys.length;
  }
}

const countButton = document.getElementById('count');
const resetButton = document.getElementById('reset');
const store = new Store();

countButton.addEventListener('click', function() {
	store.add(countButton, 5);
  countButton.innerText = store.get(countButton);
});

resetButton.addEventListener('click', function() {
	
  store.remove(countButton);
  countButton.innerText = 0;
});
